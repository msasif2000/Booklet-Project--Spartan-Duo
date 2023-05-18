import 'bootstrap/dist/css/bootstrap.min.css'
import { Routes, Route } from 'react-router-dom'
import Home from './Components/Pages/Home'
import Navbar from './Components/Navbar/Navbar'
import AboutUs from './Components/AboutUs/AboutUs'
import FirstPage from './Components/Pages/FirstPage'
import Childrens from './Components/Categories/Childrens'
import LiteraryFiction from './Components/Categories/LiteraryFiction'
import ScienceTechnology from './Components/Categories/ScienceTechnology'
import CareerGrowth from './Components/Categories/CareerGrowth'
import ReligionSpirituality from './Components/Categories/ReligionSpirituality'
import Magazines from './Components/Categories/Magazines'
import LanguageStudies from './Components/Categories/LanguageStudies'
import History from './Components/Categories/History'
import PoliticsPhilosophy from './Components/Categories/PoliticsPhilosophy'
import Travel from './Components/Categories/Travel'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'
function App() {
  return (
    <div>
    
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/FirstPage" element={<FirstPage />} />
        <Route path="/Childrens" element={<Childrens />} />
        <Route path="/LiteraryFiction" element={<LiteraryFiction />} />
        <Route path="/ScienceTechnology" element={<ScienceTechnology />} />
        <Route path="/CareerGrowth" element={<CareerGrowth />} />
        <Route path="/ReligionSpirituality" element={<ReligionSpirituality />} />
        <Route path="/Magazines" element={<Magazines />} />
        <Route path="/LanguageStudies" element={<LanguageStudies />} />
        <Route path="/History" element={<History />} />
        <Route path="/PoliticsPhilosophy" element={<PoliticsPhilosophy />} />
        <Route path="/Travel" element={<Travel />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Footer" element={<Footer />} />
        <Route path="/sign_up" element={<sign_up />} />
        
      </Routes>
    </div>
  );
}

export default App;
