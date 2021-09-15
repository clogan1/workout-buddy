import WorkoutCard from './WorkoutCard'

function UpperBody({ categories, user }){
    const upperBodyCategory = categories.filter(category => category.name === 'Upper Body')
    // console.log(upperBodyCategory)
    const upperBodyWorkouts = upperBodyCategory[0].workouts.map(workout => (
        <WorkoutCard workout={workout} user ={user}/>
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