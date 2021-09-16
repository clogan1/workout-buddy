import WorkoutCard from './WorkoutCard'
import { makeStyles } from '@material-ui/core';
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container'


const useStyles = makeStyles({
    title: {
        textAlign: 'center',
        padding: '10px',
    },
    workoutCard: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 'auto',
        // backgroundColor: 'blue',
        width: '100%'
    },
    box : {
        marginTop: '20px',
      paddingTop: '30px',
      height: '100vh'
    }

})

function Cardio({ categories, user, addWorkoutLogItem }){
    const classes = useStyles()
    const cardioCategory = ((categories.length > 0) ? categories.filter(category => category.name === 'Cardio') : [])
    const cardioWorkouts = ((categories.length > 0) ? cardioCategory[0].workouts.sort((first, second) => {
        if(second.name[0] > first.name[0]) return - 1
    })
    .map(workout => (
        <Grid item xs={12} key={workout.id}><WorkoutCard key={workout.id} workout={workout} user={user} addWorkoutLogItem={addWorkoutLogItem}/></Grid>
    )) : null)


    return (
        <>
            {(categories.length > 0) ?
                (
                <Container className={classes.box}>
                <Grid container spacing={3} className={classes.container}>
                    <Grid item xs={12}>
                        <Typography variant='h4' className={classes.title}><strong>{cardioCategory[0].name}</strong></Typography>
                    </Grid>
                    <Grid item xs ={12} className={classes.workoutCard}>
                        {cardioWorkouts}
                    </Grid>
                </Grid>
                </Container>
                ) 
                :
                null
            }
        </>
    )
}

export default Cardio