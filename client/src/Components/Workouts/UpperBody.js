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
        // display: 'flex',
        // flexDirection: 'row',
        // justifyContent: 'center',
        // alignItems: 'center',
        // backgroundColor: 'red',
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

function UpperBody({ categories, user, addWorkoutLogItem }){
    const classes = useStyles()
    let upperBodyCategory = ((categories.length > 0) ? categories.filter(category => category.name === 'Upper Body') : [])
    console.log('CATEGORIES:', upperBodyCategory)
    let upperBodyWorkouts = ((categories.length > 0) ? upperBodyCategory[0].workouts.map(workout => (
        <Grid item xs={12} key={workout.id}><WorkoutCard key={workout.id} workout={workout} user={user} addWorkoutLogItem={addWorkoutLogItem}/></Grid>
    )) : null)
    console.log('WORKOUTS:', upperBodyWorkouts)


    return (
        <>
            {(categories.length > 0) ?
                (<Grid container className={classes.container}>
                    <Grid item xs={12}>
                        <Typography varient='h1' style={{fontSize: '60px'}} className={classes.title}>{upperBodyCategory[0].name}</Typography>
                    </Grid>
                    <Grid item xs ={12} className={classes.workoutCard}>
                        {upperBodyWorkouts}
                    </Grid>
                </Grid>) 
                :
                null
            }
        </>
    )
}

export default UpperBody