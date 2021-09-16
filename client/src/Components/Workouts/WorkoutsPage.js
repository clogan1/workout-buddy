import React from 'react'
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core';
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import FitnessCenterIcon from '@material-ui/icons/FitnessCenter';


const useStyles = makeStyles({
   workoutTile: {
      color: 'white',
      backgroundColor: '#2E2E38',
      width: '500px',
      height: '250px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      margin: '0 auto',
      padding: '20px'
   },
   container: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      // backgroundColor: 'red',
      height: '100vh'
   }
})



function WorkoutsPage() {
   const classes = useStyles()


    return (
        <Grid container spacing={3} className={classes.container}>
            <Link to='/categories/1'>
               <Grid item  xs={6} className={classes.workoutTile}>
                  <Typography varient='h1' style={{fontSize: '25px'}}><strong>Upper Body</strong></Typography>
                  <IconButton aria-label=" Upper Body">
                     <FitnessCenterIcon style={{fontSize: '50px'}}/>
                  </IconButton>
               </Grid>
             </Link>
             <Link to='/categories/2'>
               <Grid item  xs={6} className={classes.workoutTile}>
                  <Typography varient='h1' style={{fontSize: '25px'}}><strong>Lower Body</strong></Typography>
                  <IconButton aria-label=" Lower Body">
                     <FitnessCenterIcon style={{fontSize: '50px'}}/>
                  </IconButton>
               </Grid>
             </Link>
             <Link to='/categories/3'>
               <Grid item xs={6} className={classes.workoutTile}> 
                  <Typography varient='h1' style={{fontSize: '25px'}}><strong>Core</strong></Typography>
                  <IconButton aria-label="Core">
                     <FitnessCenterIcon style={{fontSize: '50px'}}/>
                  </IconButton>
               </Grid>
             </Link>
             <Link to='/categories/4'>
               <Grid item xs={6} className={classes.workoutTile}>
                  <Typography varient='h1' style={{fontSize: '25px'}}><strong>Cardio</strong></Typography>
                  <IconButton aria-label="Cardio">
                     <FitnessCenterIcon style={{fontSize: '50px'}}/>
                  </IconButton>
               </Grid>
             </Link>
        </Grid>
    )
}

export default WorkoutsPage
