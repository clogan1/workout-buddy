import React from 'react'
import UserWorkoutItem from './UserWorkoutItem'
import { useHistory } from "react-router-dom";

function UserWorkoutList({ myWorkoutLog, workouts, handleSeeDetails }) {
    let history = useHistory()

    // console.log(workout_logs)
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
                {myWorkoutLog.map(log => (
                    <UserWorkoutItem key={log.id} log={log} handleSeeDetails={handleSeeDetails}/>
                ))
                }
            </tbody>
        </table>
        </div>
        </>
    )
}

export default UserWorkoutList
