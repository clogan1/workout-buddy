import CategoryCards from './CategoryCards'

function LowerBody({ categories }){
    const lowerBodyCategory = categories.filter(category => category.name === 'Lower Body')
    const lowerBodyWorkouts = lowerBodyCategory[0].workouts.map(workout => (
        <CategoryCards workout={workout} />
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