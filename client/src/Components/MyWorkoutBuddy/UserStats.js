import React from 'react'

function UserStats({ weekly_goal, total_workouts_completed, workouts_this_week }) {
    let thisWeek = Object.values(workouts_this_week)[0]

    return (
        <>
            <div>
                <h3>{total_workouts_completed}</h3>
                <p>all-time workouts completed</p>
            </div>
            <div>
                <h3>{thisWeek} of {weekly_goal}</h3>
                <p>workouts completed this week</p>
            </div>
        </>
    )
}

export default UserStats
