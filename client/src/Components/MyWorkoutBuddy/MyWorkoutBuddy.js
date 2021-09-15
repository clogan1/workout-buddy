import React from 'react'
import UserStats from './UserStats'
import UserWorkoutList from './UserWorkoutList'

function MyWorkoutBuddy({ user }) {
    const {id, username, workout_logs, workouts, weekly_goal, total_workouts_completed } = user

    return (
        <div>
            <h3>{username}'s Workout Buddy</h3>
            <UserStats weekly_goal={weekly_goal} total_workouts_completed={total_workouts_completed}/>
            <UserWorkoutList workout_logs={workout_logs} workouts={workouts}/>
        </div>
    )
}

export default MyWorkoutBuddy
