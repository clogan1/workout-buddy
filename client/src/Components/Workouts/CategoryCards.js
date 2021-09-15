

function CategoryCards({ workout }){
    const { id, name, intensity, duration } = workout
    return (
        <div>
            <h3>{name}</h3>
            <em>Duration: {duration}</em>
            <p>Intensity: {intensity}</p>
        </div>
    )
}

export default CategoryCards