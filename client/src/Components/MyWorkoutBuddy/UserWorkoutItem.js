import { useState, useEffect } from 'react'

function UserWorkoutItem({log, handleSeeDetails, deleteWorkoutLogItem}) {
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
        <tr>
            {(workout.length !== 0) ? (
                <>
                <td>{dateAdded}</td>
                <td>{workout.category.name}</td>
                <td>{workout.name}</td>
                <td>
                    {workout.exercises.map(exercise => (
                        <li key={exercise.id}>{exercise.title}</li>
                    ))    
                    }
                </td>
                </>
            ) :
            null
            }
            <td>
                {completedButton? <span>COMPLETED</span> : <button onClick={handleComplete}>Complete</button>}
                <button onClick={() => handleSeeDetails(workout.id, id)}>See Details</button>
                <button onClick={handleDelete}>Delete</button>
            </td>
        </tr>
        )
}
export default UserWorkoutItem
