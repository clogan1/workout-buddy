import React from 'react'
import { Link } from 'react-router-dom'

function WorkoutsPage() {
    return (
        <div>
            <Link to='/categories/1'>
                <div className = "WORKOUT-TILES"> Upper Body</div>
             </Link>
             <Link to='/categories/2'>
                <div className = "WORKOUT-TILES"> Lower Body</div>
             </Link>
             <Link to='/categories/3'>
                <div className = "WORKOUT-TILES"> Core</div>
             </Link>
             <Link to='/categories/4'>
                <div className = "WORKOUT-TILES"> Cardio</div>
             </Link>
        </div>
    )
}

export default WorkoutsPage
