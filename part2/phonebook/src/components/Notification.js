import React from 'react'

const Notification = ({ message, isErrorMessage }) => {
    if (message === null) {
      return null
    }
  
    return (
      <div className={isErrorMessage ? 'error' : 'success'}>
        {message}
      </div>
    )
  }

export default Notification
