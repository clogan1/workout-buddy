import WorkoutCard from './WorkoutCard'

function Core({ categories, user, addWorkoutLogItem }){
    const coreCategory = categories.filter(category => category.name === 'Core')
    const coreWorkouts = coreCategory[0].workouts.map(workout => (
        <WorkoutCard key={workout.id} workout={workout} user ={user} addWorkoutLogItem={addWorkoutLogItem}/>
    ))


    return (
        <div>
            <h1>{coreCategory[0].name}</h1>
            <ol>
                {coreWorkouts}
            </ol>
        </div>
    )
}

export default Core