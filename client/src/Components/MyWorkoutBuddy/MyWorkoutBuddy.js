import { useState, useEffect } from 'react'
import UserStats from './UserStats'
import UserWorkoutList from './UserWorkoutList'
import WorkoutDetailPage from './WorkoutDetailPage';
import { makeStyles } from '@material-ui/core'
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles({
    box: {
    //   backgroundColor: 'blue',
      marginTop: '20px',
      paddingTop: '30px',
      height: '100vh'
    },
    center : {
        textAlign: 'center',
        padding: '10px',
        // backgroundColor: 'pink'
    }
  })


function MyWorkoutBuddy({ user, myLog, deleteWorkoutLogItem }) {
    const classes = useStyles()
    const [showDetail, setShowDetail] = useState(false)
    const [detailWorkout, setDetailWorkout] = useState('')
    const [detailLogId, setDetailLogId] = useState('')
    const {id, username, workout_logs, workouts, weekly_goal, total_workouts_completed, workouts_this_week } = user

    function handleSeeDetails(workout_id, log_id){
        // console.log("See details clicked!")
        // console.log("workout id:", workout_id)
        // console.log("log id:", log_id)
        setDetailLogId(log_id)
        fetch(`/workouts/${workout_id}`)
        .then(res => res.json())
        .then(setDetailWorkout)
        .then(setShowDetail(true))
    }

    return (
        <Container className={classes.box}>
            <Grid container spacing={3}>
                <Grid xs={12} className={classes.center}>
                <Typography variant="h4"><strong>{username}'s Workout Buddy</strong></Typography>
                </Grid>
                <UserStats weekly_goal={weekly_goal} total_workouts_completed={total_workouts_completed} workouts_this_week={workouts_this_week}/>
            {(!showDetail) ?
                (
                <UserWorkoutList 
                myLog={myLog} 
                    workouts={workouts} 
                    handleSeeDetails={handleSeeDetails} 
                    deleteWorkoutLogItem={deleteWorkoutLogItem}/>
                )
                :
                ((detailWorkout !== '') ?
                  (<WorkoutDetailPage 
                        detailWorkout={detailWorkout} 
                        setDetailWorkout={setDetailWorkout} 
                        detailLogId={detailLogId} 
                        setDetailLogId={setDetailLogId} 
                        setShowDetail={setShowDetail}/>)
                  :
                  null  
                )
            }
            </Grid>
        </Container>
    )
}

export default MyWorkoutBuddy
