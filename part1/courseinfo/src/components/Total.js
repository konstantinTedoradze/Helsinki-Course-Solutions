import React from 'react'

const Total = ({parts}) => {
    console.log(parts,'talo')
    let total = 0;
    parts.map(part => total += part.exercises)
    return (
        <div>
            <h3>Total Exercises: {total}</h3>
        </div>
    )
}

export default Total
