import 'bootstrap/dist/css/bootstrap.min.css'
import { Routes, Route } from 'react-router-dom'
import Home from './Components/Pages/Home'
import Navbar from './Components/Navbar/Navbar'
function App() {
  return (
    <div>
      
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />


      </Routes>
    </div>
  );
}

export default App;
