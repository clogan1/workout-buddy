import WorkoutCard from './WorkoutCard'
import Search from './Search';
import React, {useState, useEffect} from 'react'

function Cardio({ categories, user, addWorkoutLogItem }){

    const [searchTerm, setSearchTerm] = useState("")
    const [workoutArr, setWorkoutArr] = useState([])
    const cardioCategory = ((categories.length > 0) ? categories.filter(category => category.name === 'Cardio') : [])
    

    useEffect(() => {
        setWorkoutArr(cardioCategory[0].workouts)
       }, []) 

      const filteredList = workoutArr.filter(workout => {
        if ((workout.name.toLowerCase().includes(searchTerm.toLowerCase())) ) {return true}
        else 
          {return false}
      })
      console.log(filteredList) 

      const cardioWorkouts = ((categories.length > 0) ? filteredList.map(workout => (
        <WorkoutCard key={workout.id} workout={workout} user={user} addWorkoutLogItem={addWorkoutLogItem}/>
    )) : null)

    return (
        <>
            <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm}/> 
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