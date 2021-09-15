import '../App.css';
import Login from "./Login"
import { Switch, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import MyWorkoutBuddy from './MyWorkoutBuddy/MyWorkoutBuddy';
import WorkoutsPage from './Workouts/WorkoutsPage';
import UpperBody from './Workouts/UpperBody';
import LowerBody from './Workouts/LowerBody';
import Core from './Workouts/Core';
import Cardio from './Workouts/Cardio';

function App() {

 const [user, setUser] = useState()
 const [categories, setCategories] = useState([])

  useEffect(() => {
    fetch("/me")
   .then(res => {
    //  console.log(res)
     if (res.ok) {
       res.json().then(user => setUser(user))
     }
   })
  }, [])

  useEffect(() => {
    fetch('/categories')
    .then(res => res.json())
    .then(setCategories)
  }, [])

  // console.log(categories)

  function handleSignoutClick(){
    fetch('/logout', {
      method: 'DELETE'
    }).then((r) => {
      if(r.ok){
        setUser(null)
      }
    })
  }

  console.log(user)

  if(!user) return <Login setUser={setUser}/> 

  return (
    <div className="App">
      <h1>Workout Buddy</h1>
      {user? <button onClick={handleSignoutClick}>Sign Out</button> : null}
      <Switch>
        <Route path='/myworkoutbuddy'>
          <MyWorkoutBuddy user={user}/>
        </Route>
        <Route path='/workouts'>
          <WorkoutsPage />
        </Route>
        <Route path='/categories/1'>
          <UpperBody user ={user} categories={categories}/>
        </Route>
        <Route path='/categories/2'>
          <LowerBody user ={user} categories={categories}/>
        </Route>
        <Route path='/categories/3'>
          <Core user ={user} categories={categories}/>
        </Route>
        <Route path='/categories/4'>
          <Cardio user ={user} categories={categories}/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
