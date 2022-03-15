import React from 'react'

const ButtonComponent = ({onHandleClick,text}) => {
    return (
        <button onClick={onHandleClick}>{text}</button>
    )
}

export default ButtonComponent
