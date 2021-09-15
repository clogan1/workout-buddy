import WorkoutCard from './WorkoutCard'
import Search from './Search';
import React, {useState, useEffect} from 'react'

function Cardio({ categories }){

    const [searchTerm, setSearchTerm] = useState("")
    const [workoutArr, setWorkoutArr] = useState([])
    const cardioCategory = categories.filter(category => category.name === 'Cardio')
    const cardioWorkouts = ((workoutArr.length > 0) ? filteredList.map(workout => (
        <WorkoutCard workout={workout} />
    ))
    :
    null)

    useEffect(() => {
       setWorkoutArr(cardioCategory[0].workouts)
      }, [])

      const filteredList = workoutArr.filter(workout => {
        if ((workout.name.toLowerCase().includes(searchTerm.toLowerCase())) || (workout.intensity.toLowerCase().includes(searchTerm.toLowerCase()))) return true
        
          return false
      })
      console.log(workoutArr) 

    return (
        <div>
            <h1>{cardioCategory[0].name}</h1>
            <Search search = {searchTerm} setSearchTerm = {setSearchTerm} />
            <ol>
                {cardioWorkouts}
            </ol>
        </div>
    )
}

export default Cardio