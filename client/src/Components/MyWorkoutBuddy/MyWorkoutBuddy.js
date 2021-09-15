import React from 'react'
import UserStats from './UserStats'
import UserWorkoutList from './UserWorkoutList'

<<<<<<< HEAD

function MyWorkoutBuddy() {
=======
function MyWorkoutBuddy({ user }) {
    const {id, username, workout_logs, workouts, weekly_goal, total_workouts_completed } = user

>>>>>>> 73175c70792b588a795eac4973b52e9427bb955a
    return (
        <div>
            <h3>{username}'s Workout Buddy</h3>
            <UserStats weekly_goal={weekly_goal} total_workouts_completed={total_workouts_completed}/>
            <UserWorkoutList workout_logs={workout_logs} workouts={workouts}/>
        </div>
    )
}

export default MyWorkoutBuddy
