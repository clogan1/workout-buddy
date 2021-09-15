import WorkoutCard from './WorkoutCard'

function UpperBody({ categories, user, addWorkoutLogItem }){
    let upperBodyCategory = ((categories.length > 0) ? categories.filter(category => category.name === 'Upper Body') : [])
    console.log('CATEGORIES:', upperBodyCategory)
    let upperBodyWorkouts = ((categories.length > 0) ? upperBodyCategory[0].workouts.map(workout => (
        <WorkoutCard key={workout.id} workout={workout} user={user} addWorkoutLogItem={addWorkoutLogItem}/>
    )) : null)
    console.log('WORKOUTS:', upperBodyWorkouts)


    return (
        <>
            {(categories.length > 0) ?
                (<div>
                    <h1>{upperBodyCategory[0].name}</h1>
                    <ol>
                        {upperBodyWorkouts}
                    </ol>
                </div>) 
                :
                null
            }
        </>
    )
}

export default UpperBody