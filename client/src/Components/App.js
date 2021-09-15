import '../App.css';
import Login from "./Login"
import { Switch, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import MyWorkoutBuddy from './MyWorkoutBuddy/MyWorkoutBuddy';
import WorkoutsPage from './Workouts/WorkoutsPage';

function App() {

 const [user, setUser] = useState() 

  useEffect(() => {
    fetch("/me")
   .then(res => {
    //  console.log(res)
     if (res.ok) {
       res.json().then(user => setUser(user))
     }
   })
  }, [])

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
      </Switch>
    </div>
  );
}

export default App;
