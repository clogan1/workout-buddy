import WorkoutCard from './WorkoutCard'

function Cardio({ categories, user, addWorkoutLogItem }){
    const cardioCategory = ((categories.length > 0) ? categories.filter(category => category.name === 'Cardio') : [])
    const cardioWorkouts = ((categories.length > 0) ? cardioCategory[0].workouts.map(workout => (
        <WorkoutCard key={workout.id} workout={workout} user={user} addWorkoutLogItem={addWorkoutLogItem}/>
    )) : null)


    return (
        <>
            {(categories.length > 0) ?
                (<div>
                    <h1>{cardioCategory[0].name}</h1>
                    <ol>
                        {cardioWorkouts}
                    </ol>
                </div>) 
                :
                null
            }
        </>
    )
}

export default Cardio