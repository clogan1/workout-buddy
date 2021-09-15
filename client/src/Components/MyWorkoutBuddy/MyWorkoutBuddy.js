import { useState, useEffect } from 'react'
import UserStats from './UserStats'
import UserWorkoutList from './UserWorkoutList'
import WorkoutDetailPage from './WorkoutDetailPage';

function MyWorkoutBuddy({ user }) {
    const [myWorkoutLog, setMyWorkoutLog] = useState([])
    const [showDetail, setShowDetail] = useState(false)
    const [detailWorkout, setDetailWorkout] = useState('')
    const [detailLogId, setDetailLogId] = useState('')
    const {id, username, workout_logs, workouts, weekly_goal, total_workouts_completed } = user

    useEffect(() => {
        setMyWorkoutLog(workout_logs)
    }, [])

    console.log(myWorkoutLog)

    function handleSeeDetails(workout_id, log_id){
        // console.log("See details clicked!")
        // console.log("workout id:", workout_id)
        // console.log("log id:", log_id)
        setDetailLogId(log_id)
        fetch(`/workouts/${workout_id}`)
        .then(res => res.json())
        .then(setDetailWorkout)
        .then(setShowDetail(true))
    }

    return (
        <div>
            <h3>{username}'s Workout Buddy</h3>
            <UserStats weekly_goal={weekly_goal} total_workouts_completed={total_workouts_completed}/>
            {(!showDetail) ?
                (
                <UserWorkoutList 
                myWorkoutLog={myWorkoutLog} 
                    workouts={workouts} 
                    handleSeeDetails={handleSeeDetails}/>
                )
                :
                ((detailWorkout !== '') ?
                  (<WorkoutDetailPage 
                        detailWorkout={detailWorkout} 
                        setDetailWorkout={setDetailWorkout} 
                        detailLogId={detailLogId} 
                        setDetailLogId={setDetailLogId} 
                        setShowDetail={setShowDetail}/>)
                  :
                  null  
                )
            }
        </div>
    )
}

export default MyWorkoutBuddy
