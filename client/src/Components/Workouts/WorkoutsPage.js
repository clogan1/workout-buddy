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
import Container from '@material-ui/core/Container';

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
      marginTop: '8%',
      paddingTop: '30px',
      // height: '100vh'
   },
   gridItem: {
      // backgroundColor: 'maroon',
       padding: '30px'
   }
})



function WorkoutsPage() {
   const classes = useStyles()


    return (
       <Container>
        <Grid container  className={classes.container}>
            <Link to='/categories/1'>
               <Grid item xs={10} className={classes.gridItem}>
                  <Card className={classes.workoutTile}>
                        <Typography variant='h4' ><strong>Upper Body</strong></Typography>
                        <br></br>
                           <FitnessCenterIcon style={{fontSize: '70px', color: grey[50]}}/>
                  </Card>
               </Grid>
             </Link>
             <Link to='/categories/2'>
               <Grid item xs={10} className={classes.gridItem}>
                  <Card className={classes.workoutTile}>
                        <Typography variant='h4' ><strong>Lower Body</strong></Typography>
                        <br></br>
                           <AirlineSeatLegroomExtraIcon style={{fontSize: '70px', color: grey[50]}}/>
                  </Card>
               </Grid>
             </Link>
             <Link to='/categories/3'>
               <Grid item xs={10} className={classes.gridItem}> 
                  <Card className={classes.workoutTile}>
                        <Typography variant='h4' ><strong>Core</strong></Typography>
                        <br></br>
                           <Brightness5Icon style={{fontSize: '70px', color: grey[50]}}/>
                  </Card>
               </Grid>
             </Link>
             <Link to='/categories/4'>
               <Grid item xs={10} className={classes.gridItem}>
                  <Card className={classes.workoutTile}>
                        <Typography variant='h4' ><strong>Cardio</strong></Typography>
                        <br></br>
                           <DirectionsRunIcon style={{fontSize: '70px', color: grey[50]}}/>
                  </Card>
               </Grid>
             </Link>
        </Grid>
        </Container>
    )
}

export default WorkoutsPage
