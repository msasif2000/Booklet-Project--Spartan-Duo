import React from 'react'
// import Careers from '../Careers/Career'
import "./Home.css"
import FirstPage from './FirstPage'
import Contact from '../Contact/Contact'
import Footer from '../Footer/Footer'

export default function Home() {
  return (
    <div className='Home'>
      <div className='Main'>
      <FirstPage />
      <Contact />
      <Footer />
      </div>
    </div>
  )
}

