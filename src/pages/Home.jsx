import React from 'react'
import Announcement from '../components/Announcement'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Info from '../components/Info'
import Tickets from '../components/Tickets'

const Home = () => {
  return (
    <>
      <Header/>
      <Info/>
      <Announcement/>
      <Tickets/>
      <Footer/>
    </>
  )
}
export default Home