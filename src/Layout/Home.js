import React from 'react'
import Header from './components/Navbar'
import Banner from './components/Banner'
import Category from './components/Category'
import Awesome from './components/Awesome'
import Sale from './components/Sale'
import BestSellers from './components/BestSellers'
import Subscribe from'./components/Subscribe'
import Creative from './components/Creative'
import Footer from './components/Footer'

export default function Home() {
  return(
    <div>
      <Header/>
      <Banner/>
      <Category/>
      <Awesome/>
      <Sale/>
      <BestSellers/>
      <Subscribe/>
      <Creative/>
      <Footer/>
    </div>
  )
}