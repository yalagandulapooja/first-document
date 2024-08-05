import React from 'react'

const Student = ({stu}) => {
  return (
    <div>
        <h1>ID is {stu.id} Name is {stu.name}.</h1>
    </div>
  )
}

export default Student