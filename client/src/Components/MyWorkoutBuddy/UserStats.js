import React from 'react'
import Grid from '@material-ui/core/Grid';
import { makeStyles, TableSortLabel } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import { AreaChart } from 'react-chartkick';
import 'chartkick/chart.js'

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
    },
    chart : {
        color: 'white',
        marginBottom: '30px',
        marginTop: '30px'
    },
    label: {
        textAlign: 'center',
        // fontSize: '14px',
        marginTop: '20px'
    }
  })

function UserStats({ weekly_goal, total, weekly, completed_workouts_by_week }) {
    const classes = useStyles()

    // console.log(completed_workouts_by_week)

    // let thisWeek = Object.values(workouts_this_week)[0]

    return (
        <>
            <Grid xs={6} item className={classes.dataBox}>
                <Typography variant="h3" className={classes.numbers}><strong>{total}</strong></Typography>
                <Typography>all-time workouts completed</Typography>
            </Grid>
            <Grid xs={6} item className={classes.dataBox}>
                <Typography variant="h3" className={classes.numbers}><strong>{weekly} / {weekly_goal}</strong></Typography>
                <Typography>workouts completed this week</Typography>
            </Grid>
            <Grid xs={12} item className={classes.chart}>
            <AreaChart height="100px"  colors={["#6F2DBD"]}
            options={{
                legend: {
                    labels: {
                        fontColor: "white"
                    }
                    }
            }}
            data={completed_workouts_by_week} />
            <Typography className={classes.label}>workouts completed each week</Typography>
            </Grid>
        </>
    )
}

export default UserStats

