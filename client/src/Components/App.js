import '../App.css';
import Login from "./Login"
import {
  Switch, Route} from "react-router-dom";
import { useEffect, useState } from "react";
import {Switch,Route} from "react-router-dom";
import {useEffect,useState} from "react";
import MyWorkoutBuddy from './MyWorkoutBuddy/MyWorkoutBuddy';
import WorkoutsPage from './Workouts/WorkoutsPage';

function App() {

 const [user, setUser] = useState('claire') 

  useEffect(() => {
    fetch("/me")
   .then(res => {
     if (res.ok) {
       res.json().then(user =>setUser(user))
     }
   })
  }, [])

  if(!user) return <Login/> 

  return (
    <div className="App">
      <h1>Workout Buddy</h1>
      <Switch>
        <Route path='/myworkoutbuddy'>
          <MyWorkoutBuddy />
        </Route>
      </Switch>
      <Switch>
        <Route path='/workouts'>
          <WorkoutsPage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
