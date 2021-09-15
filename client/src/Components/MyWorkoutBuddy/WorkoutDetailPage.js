import React from 'react'


function WorkoutDetailPage({ detailWorkout, detailLogId, setShowDetail, setDetailWorkout, setDetailLogId}) {

    function handleBackClick(){
        setShowDetail(false)
        setDetailWorkout('')
        setDetailLogId('')
    }

    return (
        <div>
            <h3>{detailWorkout.name}</h3>
            <p>Category: {detailWorkout.category.name}</p>
            <p>Intensity: {detailWorkout.intensity}</p>
            <p>Duration: {detailWorkout.duration} minutes</p>
            <h4>Exercises:</h4>
            {detailWorkout.exercises.map(exercise => (
                <li key={exercise.id}>{exercise.title} {exercise.recommended_reps ? ` | recommended reps: ${exercise.recommended_reps}` : null } | equipment: {exercise.equipment ? exercise.equipment : "none"}</li>
            ))

            }
            <button onClick={handleBackClick}>Back</button>
        </div>
    )
}

export default WorkoutDetailPage
