import WorkoutCard from './WorkoutCard'

function Core({ categories, user, addWorkoutLogItem }){
    const coreCategory = ((categories.length > 0) ? categories.filter(category => category.name === 'Core') : [])
    const coreWorkouts = ((categories.length > 0) ? coreCategory[0].workouts.map(workout => (
        <WorkoutCard key={workout.id} workout={workout} user={user} addWorkoutLogItem={addWorkoutLogItem}/>
    )) : null)


    return (
        <>
            {(categories.length > 0) ?
                (<div>
                    <h1>{coreCategory[0].name}</h1>
                    <ol>
                        {coreWorkouts}
                    </ol>
                </div>) 
                :
                null
            }
        </>
    )
}

export default Core