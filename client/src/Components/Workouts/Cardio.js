import WorkoutCard from './WorkoutCard'
import Search from './Search';
import React, {useState, useEffect} from 'react'

function Cardio({ categories, user, addWorkoutLogItem }){

    const [searchTerm, setSearchTerm] = useState("")
    const [workoutArr, setWorkoutArr] = useState([])
    const cardioCategory = ((categories.length > 0) ? categories.filter(category => category.name === 'Cardio') : [])
    const cardioWorkouts = ((categories.length > 0) ? cardioCategory[0].workouts.map(workout => (
        <WorkoutCard key={workout.id} workout={workout} user={user} addWorkoutLogItem={addWorkoutLogItem}/>
    )) : null)

    useEffect(() => {
        setWorkoutArr(cardioCategory[0].workouts)
       }, [])

      const filteredList = workoutArr.filter(workout => {
        if ((workout.name.toLowerCase().includes(searchTerm.toLowerCase())) || (workout.intensity.toLowerCase().includes(searchTerm.toLowerCase()))) return true
        
          return false
      })
      console.log(workoutArr) 


    return (
        <>
            <Search/> 
            {(categories.length > 0) ?
                (<div>
                    <h1>{cardioCategory[0].name}</h1>
                    <ol>
                        {cardioWorkouts}
                    </ol>
                </div>) 
                :
                null
            }
        </>
    )
}

export default Cardio;