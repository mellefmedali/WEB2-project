import React from 'react'
import '../Components.css'

const MatchDetails = ({details}) => {
    return (
        <div className='matchDetails'>
            <h6>{details.match}</h6>
            <p>{details.stadium}</p>
            <p>{details.start} GMT</p>
        </div>
    )
}

export default MatchDetails