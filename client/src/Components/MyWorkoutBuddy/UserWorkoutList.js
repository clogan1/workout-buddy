import React from 'react'
import UserWorkoutItem from './UserWorkoutItem'
import { useHistory } from "react-router-dom";

function UserWorkoutList({ workout_logs, workouts }) {
    let history = useHistory()

    console.log(workout_logs)
    // console.log(workouts)

    function handleRouteWorkouts(){
        history.push('/workouts')
    }

    return (
        <>
        <h3>Upcoming Workouts</h3>
        <button onClick={handleRouteWorkouts}>Add More Workouts</button>
        <div>
        <table>
            <thead>
                <tr>
                <th>Date Added</th>
                <th>Category</th>
                <th>Name</th>
                <th>Exercises</th>
                <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {workout_logs.map(log => (
                    <UserWorkoutItem key={log.id} log={log}/>
                ))
                }
            </tbody>
        </table>
        </div>
        </>
    )
}

export default UserWorkoutList
