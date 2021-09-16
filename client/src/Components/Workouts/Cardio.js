import WorkoutCard from './WorkoutCard'
import { makeStyles } from '@material-ui/core';
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    container: {
        // backgroundColor: '#2E2E38',
        // height: '100vh',
        width: '100%'
    },
    title: {
        textAlign: 'center'
    },
    workoutCard: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 'auto',
        // backgroundColor: 'blue',
        width: '100%'
    }
})

function Cardio({ categories, user, addWorkoutLogItem }){
    const classes = useStyles()
    const cardioCategory = ((categories.length > 0) ? categories.filter(category => category.name === 'Cardio') : [])
    const cardioWorkouts = ((categories.length > 0) ? cardioCategory[0].workouts.map(workout => (
        <Grid item xs={12} key={workout.id}><WorkoutCard key={workout.id} workout={workout} user={user} addWorkoutLogItem={addWorkoutLogItem}/></Grid>
    )) : null)


    return (
        <>
            {(categories.length > 0) ?
                (<Grid container className={classes.container}>
                    <Grid item xs={12}>
                        <Typography varient='h1' style={{fontSize: '60px'}} className={classes.title}>{cardioCategory[0].name}</Typography>
                    </Grid>
                    <Grid item xs ={12} className={classes.workoutCard}>
                        {cardioWorkouts}
                    </Grid>
                </Grid>) 
                :
                null
            }
        </>
    )
}

export default Cardio