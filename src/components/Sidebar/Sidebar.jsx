import React from 'react'
import "./Sidebar.css"

const Sidebar = () => {
  return (
    <div className="sideBar">
        <div className="sCategories">
            <h1>Sub Categories</h1>
        </div>
        <ul>
            <li className='active'>All products</li>
            <li>Trekking shoes</li>
            <li>Trekking Jackets</li>
            <li> Backpacks</li>
            <li>Trek Accessories</li>
        </ul>
        <div className="ads">
            <h2>Traveling via Delhi,</h2>
            <h2>Dehradun or Chandigarh?</h2>
            <h3>Save Upto <span>20%</span></h3>
            <button className='knowMore'>Know More</button>
        </div>
    </div>
  )
}

export default Sidebar