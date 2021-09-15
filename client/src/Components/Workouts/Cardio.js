import WorkoutCard from './WorkoutCard'

function Cardio({ categories, user, addWorkoutLogItem }){
    const cardioCategory = categories.filter(category => category.name === 'Cardio')
    const cardioWorkouts = cardioCategory[0].workouts.map(workout => (
        <WorkoutCard key={workout.id} workout={workout} user ={user} addWorkoutLogItem={addWorkoutLogItem}/>
    ))


    return (
        <div>
            <h1>{cardioCategory[0].name}</h1>
            <ol>
                {cardioWorkouts}
            </ol>
        </div>
    )
}

export default Cardio