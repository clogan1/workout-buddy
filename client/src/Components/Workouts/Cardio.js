import WorkoutCard from './WorkoutCard'

function Cardio({ categories, user }){
    const cardioCategory = categories.filter(category => category.name === 'Cardio')
    const cardioWorkouts = cardioCategory[0].workouts.map(workout => (
        <WorkoutCard workout={workout} user ={user}/>
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