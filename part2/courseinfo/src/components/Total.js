import React from 'react'

const Total = ({parts}) => {
    const total = parts.map(part => part.exercises).reduce((s, p) => s + p);
    console.log(total,'talo');
    
    return (
        <div>
            <h3>Total Exercises: {total}</h3>
        </div>
    )
}

export default Total
