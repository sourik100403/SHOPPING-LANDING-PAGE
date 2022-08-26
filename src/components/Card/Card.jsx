import React from 'react'
import Sidebar from '../Sidebar/Sidebar'
import "./Card.css"



export const MainCardContainer = () => {
    return (

        <>
        <div className="Container">

            <Sidebar />
            <div className="Container1">

            <CardContainer heading="Trekking Shoes" />
            <CardContainer heading="Trekking Jackets" />
            <CardContainer heading="Backpacks" />
            <CardContainer heading="Trek Accessories" />
            </div>
        </div>
        </>

    )
}


export const CardContainer = ({ heading }) => {
    return (
        <>
            <div className="mainContainer">
                <div className="CardHeading">
                    <h1>{heading}</h1>
                </div>

                <div className="cardContainer">
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </div>
            </div>
        </>
    )
}

const Card = () => {
    return (
        <>
            <div className="card">
                <div className="imgContainer">
                    <img src="https://d1muf25xaso8hp.cloudfront.net/https%3A%2F%2Fik.imagekit.io%2Ffaskf16pg%2FTrekking_Gear%2Fmens-snow-hiking-shoes-on-rent-3_PE--Phfoj.webp?updatedAt=1627650068584&w=240&h=220&auto=compress,&dpr=2&fit=max" alt="" />
                </div>
                <div className="item">
                    <p className='itemName'>SH520 Snow Shoes</p>
                    <div className="like"> ❤️ </div>
                </div>
            </div>
        </>
    )
}

export default Card

