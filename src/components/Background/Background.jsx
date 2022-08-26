import React from 'react'
import "./Background.css"

const Background = () => {
  return (
    <div className="backgroundContainer">
        <div className="strip">
            <p>Delivery Date <button className='stripBtn'>Delivery Date</button></p>
            <p>Return Date <button className='stripBtn'>Return Date</button></p>
            <p><button className='stripBtn yBtn'>View Prices</button></p>
        </div>
    </div>
  )
}

export default Background