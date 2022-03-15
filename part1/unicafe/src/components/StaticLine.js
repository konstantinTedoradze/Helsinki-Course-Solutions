import React from 'react'

const StaticLine = ({text,value}) => (<tr><td>{text}</td><td>{value} {text === 'Average' ? '%' : ''}</td></tr>)

export default StaticLine
