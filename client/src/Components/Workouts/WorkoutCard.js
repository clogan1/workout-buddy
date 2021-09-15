

function WorkoutCard({ workout }){
    const { id, name, intensity, duration } = workout


    function handleAddWorkout(e){
        console.log('hi')
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