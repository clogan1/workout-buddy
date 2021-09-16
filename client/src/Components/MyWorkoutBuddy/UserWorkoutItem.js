import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core'
import CheckIcon from '@material-ui/icons/Check';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import { grey } from '@material-ui/core/colors';
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import VisibilityIcon from '@material-ui/icons/Visibility';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';


const useStyles = makeStyles({
      text: {
          color:'white'
      },
      icons : {
          marginRight: '5px',
          marginLeft: '5px',
          width: '30px'
      }
  })

function UserWorkoutItem({log, handleSeeDetails, deleteWorkoutLogItem}) {
    const classes = useStyles()

    const [workout, setWorkout] = useState([])
    const [completedButton, setCompletedButton] = useState(false)
    const { id, is_completed, notes, workout_id, created_at, date_completed, user_id} = log

    let dateAdded = Date.parse(created_at)
    dateAdded = new Intl.DateTimeFormat('en-US').format(dateAdded)

    useEffect(() => {
        fetch(`workouts/${workout_id}`)
        .then(res => res.json())
        .then(setWorkout)
        .then(setCompletedButton(is_completed))
    }, [])

    //console.log(Date.now().getDate())

    function handleComplete(){
        console.log("Completed, woot!")
        const t = new Date(Date.now()).toISOString()
        fetch(`/workout_logs/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(
                { is_completed: true,
                    date_completed: t
                    //need to figure out pathing datetime in proper format
                })
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            setCompletedButton(true)
        })
    }


    function handleDelete(){
        console.log("Deleted, bye!")
        fetch(`/workout_logs/${id}`, {
            method: 'DELETE',
            headers: { Accept: 'application/json' }
        })
        .then(deleteWorkoutLogItem(id))
    }

    return (
        <TableRow >
            {(workout.length !== 0) ? (
                <>
                <TableCell className={classes.text}>{dateAdded}</TableCell>
                <TableCell className={classes.text}>{workout.category.name}</TableCell>
                <TableCell className={classes.text}>{workout.name}</TableCell>
                <TableCell className={classes.text}>
                    {workout.exercises.map(exercise => (
                        <li key={exercise.id}>{exercise.title}</li>
                    ))    
                    }
                </TableCell>
                </>
            ) :
            null
            }
            <TableCell >
                {completedButton? 
                    <CheckIcon className={classes.icons} style={{ color: grey[50] }} size="small"/> 
                    : 
                    <IconButton onClick={handleComplete} className={classes.icons}>
                        <CheckBoxOutlineBlankIcon fontSize="small" style={{ color: grey[50] }}/>
                    </IconButton>
                }
                <IconButton  size="small" variant="outlined" color="secondary" onClick={() => handleSeeDetails(workout.id, id)} className={classes.icons}>
                    <VisibilityIcon fontSize="small" style={{ color: grey[50] }}/>
                </IconButton>
                <IconButton onClick={handleDelete} className={classes.icons}>
                    <DeleteIcon fontSize="small" style={{ color: grey[50] }} />
                </IconButton>
            </TableCell>
        </TableRow>
        )
}
export default UserWorkoutItem
