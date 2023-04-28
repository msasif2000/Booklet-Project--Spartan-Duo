import React from 'react'
// import Careers from '../Careers/Career'
import "./Home.css"
import FirstPage from './FirstPage'
import Contact from '../Contact/Contact'
import Footer from '../Footer/Footer'

function Home() {
  return (
    <div className='Home'>
      <FirstPage />
      <Contact />
      <Footer />
    </div>
  )
}
export default Home;

