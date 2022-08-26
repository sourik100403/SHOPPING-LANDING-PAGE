import React from 'react'
import "./Categories.css"


export const MoreCategories = () => {
    return (
        <div className="moreCategories">
            <h1>More Categories</h1>
            <div className="category">
                <CategoriesCard />
                <CategoriesCard />
                <CategoriesCard />
                <CategoriesCard />
                <CategoriesCard />
                <CategoriesCard />
                <CategoriesCard />
                <CategoriesCard />
                <CategoriesCard />
                <CategoriesCard />
                <CategoriesCard />
                <CategoriesCard />
                <CategoriesCard />
                <CategoriesCard />
                <CategoriesCard />
            </div>

        </div>
    )
}
export const RecentlyViewed = () => {
    return (
        <div className="moreCategories">
            <h1>Recently Viewed</h1>
            <div className="category">
                <CategoriesCard />
                <CategoriesCard />
                <CategoriesCard />
                <CategoriesCard />
                <CategoriesCard />
                <CategoriesCard />
                <CategoriesCard />
                <CategoriesCard />
                <CategoriesCard />
                <CategoriesCard />
                <CategoriesCard />
                <CategoriesCard />
                <CategoriesCard />
                <CategoriesCard />
                <CategoriesCard />
            </div>

        </div>
    )
}


const CategoriesCard = () => {
    return (
        <div className="catCard">
            <div className="catImg">
                <img src="https://ik.imagekit.io/faskf16pg/Categories/sharepal-categories-rent-trekking-gear_n5yGYTwdF.webp" alt="" />
            </div>
            <div className="catName">
                <p className='catItemName'>Trekking Gear</p>
            </div>
        </div>
    )
}

export default CategoriesCard