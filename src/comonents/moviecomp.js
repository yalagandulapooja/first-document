import React from 'react'
import './moviecomp.css';

const Moviecomp = (props) => {
  return (
    <div className='movie'>
        <img src={props.path} alt="shavukaru" />
        <h4>{props.name}</h4>
        <p>{props.Likes}</p>
        <button>Book Ticket</button>
    </div>
  )
}

export default Moviecomp