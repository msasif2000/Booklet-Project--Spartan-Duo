import 'bootstrap/dist/css/bootstrap.min.css'
import { Routes, Route } from 'react-router-dom'
import Home from './Components/Pages/Home'
import Navbar from './Components/Navbar/Navbar'
import Offer from './Components/Offer/Offer'

function App() {
  return (
    <div>
      
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/" element={<Offer />} />
      </Routes>
    </div>
  );
}

export default App;
