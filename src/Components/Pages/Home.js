import React from 'react'
import "./Home.css"
import FirstPage from './FirstPage'
//import AboutUs from '../AboutUs/AboutUs'
//<AboutUs />
import Contact from '../Contact/Contact'
import Footer from '../Footer/Footer'
import Childrens from '../Categories/Childrens/Childrens'
import LiteraryFiction from '../Categories/LiteraryFiction/LiteraryFiction'
import ScienceTechnology from '../Categories/ScienceTechnology/ScienceTechnology'

function Home() {
  return (
    <div className='Home'>
      <FirstPage />
      <Childrens />
      <LiteraryFiction />
      <ScienceTechnology />
      <Contact />
      <Footer />
    </div>
  )
}
export default Home;