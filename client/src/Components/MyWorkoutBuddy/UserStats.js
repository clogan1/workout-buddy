import React from 'react'
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles({
    dataBox: {
    //   backgroundColor: 'green',
      textAlign: 'center',
      paddingBottom: '10px',
      paddingTop: '10px',
      marginBottom: '20px',
      marginTop: '20px'
    },
    numbers : {
        color: '#6F2DBD'
    }
  })

function UserStats({ weekly_goal, total_workouts_completed, workouts_this_week }) {
    const classes = useStyles()

    let thisWeek = Object.values(workouts_this_week)[0]

    return (
        <>
            <Grid xs={6} className={classes.dataBox}>
                <Typography variant="h3" className={classes.numbers}><strong>{total_workouts_completed}</strong></Typography>
                <Typography>all-time workouts completed</Typography>
            </Grid>
            <Grid xs={6} className={classes.dataBox}>
                <Typography variant="h3" className={classes.numbers}><strong>{thisWeek} / {weekly_goal}</strong></Typography>
                <Typography>workouts completed this week</Typography>
            </Grid>
        </>
    )
}

export default UserStats
