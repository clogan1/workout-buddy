

function WorkoutCard({ workout, user }){
    const { id, name, intensity, duration } = workout
    const newWorkoutLog = {
        user_id: user.id,
        workout_id: id
    }


    function handleAddWorkout(e){
        e.preventDefault()
        fetch('/workout_logs', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(newWorkoutLog)
        })
        .then(res => res.json())
        .then(addedWorkout => console.log(addedWorkout))
    }

    
    return (
        <div>
            <h3>{name}</h3>
            <em>Duration: {duration}</em>
            <p>Intensity: {intensity}</p>
            <button onClick={handleAddWorkout}>Add to Workout Log</button>
        </div>
    )
}

export default WorkoutCard