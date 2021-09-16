import WorkoutCard from './WorkoutCard'

function LowerBody({ categories, user, addWorkoutLogItem }){
    const lowerBodyCategory = ((categories.length > 0) ? categories.filter(category => category.name === 'Lower Body') : [])
    const lowerBodyWorkouts = ((categories.length > 0) ? lowerBodyCategory[0].workouts.map(workout => (
        <WorkoutCard key={workout.id} workout={workout} user={user} addWorkoutLogItem={addWorkoutLogItem}/>
    )) : null)


    return (
        <>
            {(categories.length > 0) ?
                (<div>
                    <h1>{lowerBodyCategory[0].name}</h1>
                    <ol>
                        {lowerBodyWorkouts}
                    </ol>
                </div>) 
                :
                null
            }
        </>
    )
}

export default LowerBody