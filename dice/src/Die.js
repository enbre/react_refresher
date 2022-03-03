import React from 'react'

const Die = ({num}) => {
   console.log('test',num)
  return (
    <div>Die!!
      <i className={`fas fa-dice-${num}`}></i>
      {/* <i className={`fas fa-dice-one`}></i> */}
    </div>
  )
}

export default Die