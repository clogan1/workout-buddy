import React from 'react'
import UserWorkoutItem from './UserWorkoutItem'
import { useHistory } from "react-router-dom";
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import Box from '@material-ui/core/Box'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

const useStyles = makeStyles({
    header: {
    //   backgroundColor: 'green',
      float: 'left',
      marginRight: '50%',
    },
    boxes: {
        marginTop:'20px',
        marginBottom: '30px'
    },
    table: {
        minWidth: 650,
      },
      text: {
          color:'white'
      }
  })


function UserWorkoutList({ myLog, workouts, handleSeeDetails, deleteWorkoutLogItem, setWeekly, setTotal, weekly, total }) {
    const classes = useStyles()
    let history = useHistory()

    // console.log(workout_logs)
    // console.log(workouts)

    function handleRouteWorkouts(){
        history.push('/workouts')
    }

    return (
        <Grid xs={12}>
        <Box className={classes.boxes}>
        <Typography variant="h5" className={classes.header}>Upcoming Workouts</Typography>
        <Button color="primary" variant="contained" onClick={handleRouteWorkouts} >Add More Workouts</Button>
        </Box>
        <TableContainer>
        <Table className={classes.table}>
            <TableHead>
                <TableRow>
                <TableCell className={classes.text}>Date Added</TableCell>
                <TableCell className={classes.text}>Category</TableCell>
                <TableCell className={classes.text}>Name</TableCell>
                <TableCell className={classes.text}>Exercises</TableCell>
                <TableCell className={classes.text}>Actions</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {myLog.map(log => (
                    <UserWorkoutItem key={log.id} log={log} handleSeeDetails={handleSeeDetails} deleteWorkoutLogItem={deleteWorkoutLogItem}
                    setTotal={setTotal}
                    setWeekly={setWeekly}
                    weekly={weekly}
                    total={total}/>
                ))
                }
            </TableBody>
        </Table>
        </TableContainer>
        </Grid>
    )
}

export default UserWorkoutList
