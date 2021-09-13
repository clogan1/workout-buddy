import '../App.css';
import Login from "./Login"
import {
  Switch, Route} from "react-router-dom";
import { useEffect, useState } from "react";

function App() {

 const [user, setUser] = useState(null) 

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
    </div>
  );
}

export default App;
