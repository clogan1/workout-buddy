import { ThemeProvider, createTheme } from '@material-ui/core'
import { makeStyles } from '@material-ui/core'
import '../App.css';
import Login from "./Login"
import { Switch, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import MyWorkoutBuddy from './MyWorkoutBuddy/MyWorkoutBuddy';
import WorkoutsPage from './Workouts/WorkoutsPage';
import UpperBody from './Workouts/UpperBody';
import LowerBody from './Workouts/LowerBody';
import AddCustomWorkout from './AddCustomWorkout'
import Core from './Workouts/Core';
import Cardio from './Workouts/Cardio';
import NavBar from './NavBar';
import UserProfile from './MyWorkoutBuddy/UserProfile';
import Container from '@material-ui/core/Container';

const theme = createTheme({
  palette: {
    primary: {
      main: '#6F2DBD'
    },
    secondary: {
      main: '#2E2E38'
    }
  }
});

const useStyles = makeStyles({
  app: {
    color: 'white',
    backgroundColor: '#1E1E24',
    display: 'flex'
  }
})

function App() {
 const classes = useStyles()

 const [user, setUser] = useState()
 const [categories, setCategories] = useState([])
 const [myLog, setLog] = useState([])

  useEffect(() => {
    fetch("/me")
   .then(res => {
    //  console.log(res)
     if (res.ok) {
       res.json().then(user => {
         setUser(user)
         setLog(user.workout_logs)
        })
     }
   })
  }, [])

  // console.log("my log:", myLog)

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
        setLog([])
      }
    })
  }

  function addWorkoutLogItem(logObj){
    setLog([...myLog, logObj ])
  }
  
  function deleteWorkoutLogItem(id){
    // console.log("deleted!")
    const updatedLog = myLog.filter(log => log.id !== id)
    setLog(updatedLog)
  }

  // console.log(user)

  if(!user) return <Login setUser={setUser} setLog={setLog}/> 


  return (
    <ThemeProvider theme={theme}>
      <Container className={classes.app}>
        <NavBar handleSignoutClick={handleSignoutClick}/>
        <Switch>
          <Route path='/myworkoutbuddy'>
            <MyWorkoutBuddy user={user} myLog={myLog} deleteWorkoutLogItem={deleteWorkoutLogItem}/>
          </Route>
          <Route path='/workouts'>
            <WorkoutsPage />
          </Route>
          <Route path='/categories/1'>
            <UpperBody user ={user} categories={categories} addWorkoutLogItem={addWorkoutLogItem}/>
          </Route>
          <Route path='/categories/2'>
            <LowerBody user ={user} categories={categories} addWorkoutLogItem={addWorkoutLogItem}/>
          </Route>
          <Route path='/categories/3'>
            <Core user ={user} categories={categories} addWorkoutLogItem={addWorkoutLogItem}/>
          </Route>
          <Route path='/categories/4'>
            <Cardio user ={user} categories={categories} addWorkoutLogItem={addWorkoutLogItem}/>
          </Route>
          <Route path='/addworkout'>
            <AddCustomWorkout categories={categories} addWorkoutLogItem={addWorkoutLogItem} user ={user}/>
          </Route>
          <Route path='/profile'>
            <UserProfile user ={user} setUser={setUser}/>
          </Route>
        </Switch>
      </Container>
    </ThemeProvider>
  );
}

export default App;
