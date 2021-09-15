import WorkoutCard from './WorkoutCard'

function Core({ categories, user }){
    const coreCategory = categories.filter(category => category.name === 'Core')
    const coreWorkouts = coreCategory[0].workouts.map(workout => (
        <WorkoutCard workout={workout} user ={user}/>
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