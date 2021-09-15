import WorkoutCard from './WorkoutCard'

function UpperBody({ categories }){
    const upperBodyCategory = categories.filter(category => category.name === 'Upper Body')
    // console.log(upperBodyCategory)
    const upperBodyWorkouts = upperBodyCategory[0].workouts.map(workout => (
        <WorkoutCard workout={workout} />
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