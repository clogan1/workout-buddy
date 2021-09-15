import WorkoutCard from './WorkoutCard'

function LowerBody({ categories, user, addWorkoutLogItem }){
    const lowerBodyCategory = categories.filter(category => category.name === 'Lower Body')
    const lowerBodyWorkouts = lowerBodyCategory[0].workouts.map(workout => (
        <WorkoutCard key={workout.id} workout={workout} user ={user} addWorkoutLogItem={addWorkoutLogItem}/>
    ))


    return (
        <div>
            <h1>{lowerBodyCategory[0].name}</h1>
            <ol>
                {lowerBodyWorkouts}
            </ol>
        </div>
    )
}

export default LowerBody