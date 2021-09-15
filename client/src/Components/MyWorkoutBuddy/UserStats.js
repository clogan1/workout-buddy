import React from 'react'

function UserStats({ weekly_goal, total_workouts_completed }) {
    return (
        <>
            <div>
                <h3>{total_workouts_completed}</h3>
                <p>all-time workouts completed</p>
            </div>
            <div>
                <h3># / {weekly_goal}</h3>
                <p>workouts completed this week</p>
            </div>
        </>
    )
}

export default UserStats
