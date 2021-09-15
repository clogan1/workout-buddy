import CategoryCards from './CategoryCards'

function Core({ categories }){
    const coreCategory = categories.filter(category => category.name === 'Core')
    const coreWorkouts = coreCategory[0].workouts.map(workout => (
        <CategoryCards workout={workout} />
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