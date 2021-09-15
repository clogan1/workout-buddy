import WorkoutCard from './WorkoutCard'

function UpperBody({ categories, user, addWorkoutLogItem }){
    const upperBodyCategory = categories.filter(category => category.name === 'Upper Body')
    // console.log(upperBodyCategory)
    const upperBodyWorkouts = upperBodyCategory[0].workouts.map(workout => (
        <WorkoutCard key={workout.id} workout={workout} user ={user} addWorkoutLogItem={addWorkoutLogItem}/>
    ))
    // console.log(upperBodyWorkouts)


    return (
        <div>
            <h1>{upperBodyCategory[0].name}</h1>
            <ol>
                {upperBodyWorkouts}
            </ol>
        </div>
    )
}

export default UpperBody