import React from 'react'
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Box from '@material-ui/core/Box';

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
    button: {
        justifyContent: "flex-end",
        alignItems: "flex-end",
        padding: '10px',
        marginRight: '20px',
        marginBottom: '10px'
    }
  });



function WorkoutDetailPage({ detailWorkout, detailLogId, setShowDetail, setDetailWorkout, setDetailLogId}) {
    const classes = useStyles();

    function handleBackClick(){
        setShowDetail(false)
        setDetailWorkout('')
        setDetailLogId('')
    }

    return (
        <Grid xs={12}>
            <Card className={classes.root} variant="outlined">
                <CardContent>
                    <Typography variant="h5"><strong>{detailWorkout.name}</strong></Typography>
                    <br></br>
                    <Divider className={classes.divider}/>
                    <Box display={'flex'}>
                        <Box p={2} flex={'auto'}>
                            <p><strong>CATEGORY</strong></p>
                            <p>{detailWorkout.category.name}</p>
                        </Box>
                        <Box p={2} flex={'auto'}>
                            <p><strong>INTENSITY</strong></p>
                            <p>{detailWorkout.intensity}</p>
                        </Box>
                        <Box p={2} flex={'auto'}>
                            <p><strong>DURATION</strong></p>
                            <p>{detailWorkout.duration} minutes</p>
                        </Box>
                    </Box> 
                    <Box p={2} flex={'auto'}>
                        <p><strong>EXERCISES</strong></p>
                        {detailWorkout.exercises.map(exercise => (
                            <p key={exercise.id}>{exercise.title} &nbsp;&nbsp;&nbsp; | &nbsp;&nbsp;&nbsp; recommended reps: {exercise.recommended_reps ? `${exercise.recommended_reps}` : `n/a`} &nbsp;&nbsp;&nbsp;| &nbsp;&nbsp;&nbsp; equipment: {exercise.equipment ? exercise.equipment : "none"}</p>
                        ))
                        }
                    </Box>
                    
                </CardContent>
                <CardActions className={classes.button}>
                    <Button size="medium" variant="contained" color="primary" onClick={handleBackClick}>Back</Button>
                </CardActions>
            </Card>
        </Grid>
    )
}

export default WorkoutDetailPage