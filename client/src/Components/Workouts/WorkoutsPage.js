import React from 'react'
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core';
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import FitnessCenterIcon from '@material-ui/icons/FitnessCenter';
import Card from '@material-ui/core/Card';
import { grey } from '@material-ui/core/colors';
import AirlineSeatLegroomExtraIcon from '@material-ui/icons/AirlineSeatLegroomExtra';
import DirectionsRunIcon from '@material-ui/icons/DirectionsRun';
import Brightness5Icon from '@material-ui/icons/Brightness5';

const useStyles = makeStyles({
   workoutTile: {
      color: 'white',
      backgroundColor: '#2E2E38',
      width: '250px',
      height: '250px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      margin: '0 auto',
      padding: '20px',
      '&:hover': {
         backgroundColor: '#40404F'
      }
   },
   container: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      // backgroundColor: 'grey',
      marginTop: '20px',
      paddingTop: '30px',
      height: '100vh'
   },
   gridItem: {
      // backgroundColor: 'maroon',
      padding: '50px'  
   }
})



function WorkoutsPage() {
   const classes = useStyles()


    return (
        <Grid container spacing={3} className={classes.container}>
            <Link to='/categories/1'>
               <Grid item xs={6} className={classes.gridItem}>
                  <Card className={classes.workoutTile}>
                        <Typography varient='h1' style={{fontSize: '40px'}}><strong>Upper Body</strong></Typography>
                        <IconButton aria-label=" Upper Body">
                           <FitnessCenterIcon style={{fontSize: '80px', color: grey[50]}}/>
                        </IconButton>
                  </Card>
               </Grid>
             </Link>
             <Link to='/categories/2'>
               <Grid item xs={6} className={classes.gridItem}>
                  <Card className={classes.workoutTile}>
                        <Typography varient='h1' style={{fontSize: '40px'}}><strong>Lower Body</strong></Typography>
                        <IconButton aria-label="Lower Body">
                           <AirlineSeatLegroomExtraIcon style={{fontSize: '80px', color: grey[50]}}/>
                        </IconButton>
                  </Card>
               </Grid>
             </Link>
             <Link to='/categories/3'>
               <Grid item xs={6} className={classes.gridItem}> 
                  <Card className={classes.workoutTile}>
                        <Typography varient='h1' style={{fontSize: '40px'}}><strong>Core</strong></Typography>
                        <IconButton aria-label="Core">
                           <Brightness5Icon style={{fontSize: '80px', color: grey[50]}}/>
                        </IconButton>
                  </Card>
               </Grid>
             </Link>
             <Link to='/categories/4'>
               <Grid item xs={6} className={classes.gridItem}>
                  <Card className={classes.workoutTile}>
                        <Typography varient='h1' style={{fontSize: '40px'}}><strong>Cardio</strong></Typography>
                        <IconButton aria-label="Cardio">
                           <DirectionsRunIcon style={{fontSize: '80px', color: grey[50]}}/>
                        </IconButton>
                  </Card>
               </Grid>
             </Link>
        </Grid>
    )
}

export default WorkoutsPage
