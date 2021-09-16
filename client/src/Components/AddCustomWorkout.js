import React, { useState } from 'react'
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core'
import Divider from '@material-ui/core/Divider';
import Box from '@material-ui/core/Box';

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
    },
    formItems: {
        marginTop: '5px',
        marginBottom: '5px',
        backgroundColor: '#e0e0e0',
        width: '300px',
        height: '30px'
    },
    labels: {
        textAlign: 'left'
    }
  })

function AddCustomWorkout({ categories }) {
    const classes = useStyles()
    const [categoryData, setCategoryData]=useState('')
    const [nameData, setNameData]=useState('')
    const [intensityData, setIntensityData]=useState('')
    const [durationData, setDurationData]=useState('')
    const [toggleExercises, setToggleExercises] = useState(false)
    const [ errors, setErrors ] = useState([])

    const newWorkOut = {
        category_id: parseInt(categoryData),
        name: nameData,
        intensity: parseInt(intensityData),
        duration: parseInt(durationData)
    }

    function handleSubmit(e){
        e.preventDefault()
        console.log(newWorkOut)
        fetch('/workouts', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(newWorkOut)
        })
        .then(res => {
            if (res.ok) {
                res.json().then(workout => console.log(workout))
            } else {
                res.json().then(err => setErrors(err.errors))
            }
        })
        
    }


    return (
        <Container className={classes.box}>
            <Grid container spacing={3}>
                <Grid xs={12} className={classes.center}>
                <Typography variant="h4"><strong>Add a Custom Workout</strong></Typography>
                </Grid>
                <Grid>
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
            </Grid>

            
        </Container>
    )
}

export default AddCustomWorkout
