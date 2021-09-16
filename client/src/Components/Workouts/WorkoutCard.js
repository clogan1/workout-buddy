import { useState } from 'react'
import { makeStyles } from '@material-ui/core';
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Divider from '@material-ui/core/Divider';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles({
    root: {
      minWidth: 275,
      borderRadius: 12,
      backgroundColor: '#2E2E38',
      color: 'white',
      marginTop: '40px'
    },
    divider: {
        backgroundColor: '#e0e0e0'
    },
    title: {
      marginTop: '10px',
      padding: '10px'
    },
    box: {
      padding: '10px'
    },
    button: {
        justifyContent: "flex-end",
        alignItems: "flex-end",
        padding: '10px',
        marginRight: '20px',
        marginLeft: '20px',
        marginBottom: '10px'
    }
  });

function WorkoutCard({ workout, user, addWorkoutLogItem }){
    const classes = useStyles()
    const [exercises, setExercises] = useState([])
    const [toggleDetails, setToggleDetails] = useState(false)
    const { id, name, intensity, duration } = workout
    const newWorkoutLog = {
        user_id: user.id,
        workout_id: id,
        is_completed: false,
        notes: ''
    }

    console.log('workout:', workout)


    function handleAddWorkout(e){
        e.preventDefault()
        fetch('/workout_logs', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(newWorkoutLog)
        })
        .then(res => res.json())
        .then(addedWorkout => addWorkoutLogItem(addedWorkout))
    }

    function handleShowDetail(){
        if(toggleDetails === false) {
        fetch(`/workouts/${id}`)
        .then(res => res.json())
        .then(data => setExercises(data.exercises))
        .then(setToggleDetails(true))
        } else {
            setToggleDetails(false)
        }
    }

    console.log(exercises)
    
    return (
        <Grid container>
            <Grid item xs={12}>
                <Card className={classes.root} variant="outlined">
                    <CardContent>
                        <Typography variant="h5" className={classes.title}><strong>{name}</strong></Typography>
                        <br></br>
                        <Divider className={classes.divider}/>
                        <Box display={'flex'} className={classes.box}>
                            <Box p={2} flex={'auto'}>
                                <em>Duration: {duration} minutes</em>
                                <br></br>
                                <br></br>
                                <em>Intensity: {intensity}</em>
                            </Box>
                            
                        </Box>
                        <Box p={2} flex={'auto'}>
                            {toggleDetails ?
                                (
                                    <>
                                    <p><strong>EXERCISES</strong></p>
                                    {exercises.map(exercise => (
                                    <p key={exercise.id}>{exercise.title} {exercise.recommended_reps ? ` | recommended reps: ${exercise.recommended_reps}` : null } | equipment: {exercise.equipment ? exercise.equipment : "none"}</p>
                                    ))}
                                    </>
                                )
                                :
                                null
                            }
                            </Box>
                            <CardActions className={classes.button}>
                            <Button size="medium" variant="contained" 
                            color="primary" 
                            onClick={handleAddWorkout}>
                                Add to Workout Log
                            </Button>
                            <Button size="medium" variant="contained" 
                            color="primary" 
                            onClick={handleShowDetail}>
                                See details
                            </Button>
                        </CardActions>
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
    )
}

export default WorkoutCard