import React from 'react'
import Background from '../Background/Background'
import  {MainCardContainer}  from '../Card/Card'
import { MoreCategories, RecentlyViewed } from '../Categories/MoreCategories'
import Footer from '../Footer/Footer'



const Main = () => {
  return (
    <>
    <Background/>
    <MainCardContainer/>
    <RecentlyViewed/>
    <MoreCategories/>
    <Footer/>
    </>
  )
}

export default Main