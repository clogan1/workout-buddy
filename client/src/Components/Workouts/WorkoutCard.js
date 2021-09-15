import { useState } from 'react'

function WorkoutCard({ workout, user, addWorkoutLogItem }){
    const [exercises, setExercises] = useState([])
    const [toggleDetails, setToggleDetails] = useState(false)
    const { id, name, intensity, duration } = workout
    const newWorkoutLog = {
        user_id: user.id,
        workout_id: id,
        is_completed: false,
        notes: ''
    }

    console.log('workout:', workout)


    function handleAddWorkout(e){
        e.preventDefault()
        fetch('/workout_logs', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(newWorkoutLog)
        })
        .then(res => res.json())
        .then(addedWorkout => addWorkoutLogItem(addedWorkout))
    }

    function handleShowDetail(){
        if(toggleDetails === false) {
        fetch(`/workouts/${id}`)
        .then(res => res.json())
        .then(data => setExercises(data.exercises))
        .then(setToggleDetails(true))
        } else {
            setToggleDetails(false)
        }
    }

    console.log(exercises)
    
    return (
        <div>
            <h2>{name}</h2>
            <em>Duration: {duration}</em>
            <p>Intensity: {intensity}</p>
            {toggleDetails ? 
                (exercises.map(exercise => (
                    <li key={exercise.id}>{exercise.title} {exercise.recommended_reps ? ` | recommended reps: ${exercise.recommended_reps}` : null } | equipment: {exercise.equipment ? exercise.equipment : "none"}</li>
                )))
                :
                null
            }
            <button onClick={handleAddWorkout}>Add to Workout Log</button>
            <button onClick={handleShowDetail}>See details</button>
        </div>
    )
}

export default WorkoutCard