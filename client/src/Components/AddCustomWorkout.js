import React, { useState, useEffect } from 'react'
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core'
import Divider from '@material-ui/core/Divider';
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import { useHistory } from 'react-router-dom'

const useStyles = makeStyles({
    box: {
    //   backgroundColor: 'blue',
      marginTop: '20px',
      paddingTop: '30px',
      height: '100vh',
    },
    center : {
        textAlign: 'center',
        padding: '10px',
        marginBottom: '30px'
        // backgroundColor: 'pink'
    },
    formItems: {
        marginTop: '10px',
        marginBottom: '10px',
        backgroundColor: '#e0e0e0',
        width: '300px',
        height: '30px',
    },
    labels: {
        textAlign: 'left'
    },
    hide: {
        display: 'none'
    },
    root: {
        minWidth: 275,
        borderRadius: 12,
        backgroundColor: '#2E2E38',
        color: 'white',
        marginTop: '40px',
        marginBottom: '40px'
      },
      divider: {
          backgroundColor: '#e0e0e0'
  
      },
      bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
      },
      title: {
        fontSize: 14,
      },
      pos: {
        marginBottom: 12,
      },
      mainGrid: {
          justifyContent: 'center',
      }
  })

function AddCustomWorkout({ categories, addWorkoutLogItem, user }) {
    let history = useHistory()
    const classes = useStyles()
    const [categoryData, setCategoryData]=useState('')
    const [nameData, setNameData]=useState('')
    const [intensityData, setIntensityData]=useState('')
    const [durationData, setDurationData]=useState('')
    const [toggleExercises, setToggleExercises] = useState(false)
    const [ errors, setErrors ] = useState([])
    const [newWorkoutObj, setNewWorkoutObj]= useState('')
    const [exerciseData, setExerciseData] = useState('')
    const [exerciseArr, setExerciseArr] = useState([])
    const [displayExercise, setDisplayExercise] = useState([])

    const newWorkOut = {
        category_id: parseInt(categoryData),
        name: nameData,
        intensity: parseInt(intensityData),
        duration: parseInt(durationData)
    }

    useEffect(() => {
        fetch('/exercises')
        .then(res => res.json())
        .then(setExerciseArr)
      }, [])

    function handleSubmit(e){
        e.preventDefault()
        fetch('/workouts', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(newWorkOut)
        })
        .then(res => {
            if (res.ok) {
                res.json().then(workout => setNewWorkoutObj(workout)).then(setToggleExercises(true))
            } else {
                res.json().then(err => setErrors(err.errors))
            }
        })
    }

    function handleAddExercise(e){
        e.preventDefault()
        // console.log(exerciseData)
        {exerciseData? 
        fetch('/workout_exercises', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                workout_id: newWorkoutObj.id, 
                exercise_id: (exerciseData)
            })
        })
        .then(res => {
            if (res.ok) {
                res.json().then(data => data)
            } else {
                res.json().then(err => setErrors(err.errors))
            }
        }).then(fetch(`/exercises/${exerciseData}`)
        .then(res => res.json())
        .then(data => setDisplayExercise([...displayExercise,data])))
        :
        console.log("Nope!")
        }
    }

    function handleFinish(){
        // post to my workout log
        fetch('/workout_logs', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                    user_id: user.id, 
                    workout_id: newWorkoutObj.id,
                    is_completed: false,
                    notes: ''
            })
        })
        .then(res => res.json())
        .then(addedWorkout => addWorkoutLogItem(addedWorkout))
        //redirect to my workout buddy
        history.push('/myworkoutbuddy')

    }

    console.log(displayExercise)

    return (
        <Container className={classes.box}>
            <Grid container spacing={3} className={classes.mainGrid}>
                <Grid xs={12} className={classes.center}>
                <Typography variant="h4"><strong>Add a Custom Workout</strong></Typography>
                </Grid>
                <Grid className={toggleExercises ? classes.hide : null}>
                    <form onSubmit={handleSubmit}>
                    <Typography className={classes.labels}>
                        Category:
                    </Typography>
                    <select onChange={(e) => setCategoryData(e.target.value)} className={classes.formItems}>
                    <option value="0">--</option>
                       {categories.map(cat => (
                           <option key={cat.id} value={cat.id}>{cat.name}</option>
                       ))
                       } 
                    </select>

                    <Typography className={classes.labels}>Workout Name:</Typography>
                    <input type='text' className={classes.formItems} value={nameData} onChange={(e) => setNameData(e.target.value)}/>

                    <Typography className={classes.labels}>Intensity Level:</Typography>
                    <select onChange={(e) => setIntensityData(e.target.value)} className={classes.formItems}>
                    <option value="0">--</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                    </select>

                    <Typography className={classes.labels}>Duration:</Typography>
                    <select onChange={(e) => setDurationData(e.target.value)} className={classes.formItems}>
                        <option value="0">--</option>
                        <option value="10">10 minutes</option>
                        <option value="15">15 minutes</option>
                        <option value="20">20 minutes</option>
                        <option value="30">30 minutes</option>
                        <option value="45">45 minutes</option>
                        <option value="60">60 minutes</option>
                    </select>
                        <br></br>
                        <br></br>
                    <Button type='submit' color="primary" variant="contained">
                        Create Workout
                    </Button>
                    </form>
                </Grid>
                { newWorkoutObj ?
                (<Grid xs={12}>
                        <Card className={classes.root} variant="outlined">
                            <CardContent>
                                <Typography variant="h5"><strong>{newWorkoutObj.name}</strong></Typography>
                                <br></br>
                                <Divider className={classes.divider}/>
                                <Box display={'flex'}>
                                    <Box p={2} flex={'auto'}>
                                        <p><strong>CATEGORY</strong></p>
                                        <p>{newWorkoutObj.category.name}</p>
                                    </Box>
                                    <Box p={2} flex={'auto'}>
                                        <p><strong>INTENSITY</strong></p>
                                        <p>{newWorkoutObj.intensity}</p>
                                    </Box>
                                    <Box p={2} flex={'auto'}>
                                        <p><strong>DURATION</strong></p>
                                        <p>{newWorkoutObj.duration} minutes</p>
                                    </Box>
                                </Box> 
                                { (displayExercise.length > 0) ?
                                (<Box p={2} flex={'auto'}>
                                    <p><strong>EXERCISES</strong></p>
                                    {displayExercise.map(exercise => (
                                        <p key={exercise.id}>{exercise.title} &nbsp;&nbsp;&nbsp; | &nbsp;&nbsp;&nbsp; recommended reps: {exercise.recommended_reps ? `${exercise.recommended_reps}` : `n/a`} &nbsp;&nbsp;&nbsp;| &nbsp;&nbsp;&nbsp; equipment: {exercise.equipment ? exercise.equipment : "none"}</p>
                                    ))
                                    }
                                    </Box>
                                )
                                :
                                null
                                }
                            </CardContent> 
                        </Card>
                </Grid>)
                    :
                    null
                    }
                <Grid className={toggleExercises ? null : classes.hide}>
                    <form onSubmit={handleAddExercise}>
                    <Typography variant="h5"><strong>Add Exercises:</strong></Typography>
                    <select onChange={(e) => setExerciseData(e.target.value)} className={classes.formItems}>
                    <option value="0">--</option>
                       {exerciseArr.map(ex => (
                           <option key={ex.id} value={ex.id}>{ex.title}</option>
                       ))
                       } 
                    </select>
                        <br></br>
                        <br></br>
                            <Button type='submit' color="primary" variant="contained">
                            Add
                            </Button>
                    </form>
                    <br></br>
                    <Button color="primary" variant="contained" onClick={handleFinish}>Finish + Add to My Workout Buddy</Button>
                </Grid>
            </Grid>

            
        </Container>
    )
}

export default AddCustomWorkout
