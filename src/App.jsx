import {BrowserRouter, Routes,Route} from'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Galaxias from './pages/Galaxias';
import Planetas from './pages/Planetas';
import Constelacion from './pages/Constelacion';
import Galeria from './pages/Galeria';
import FunFacts from './pages/FunFacts';
import Meteoro from './pages/Meteoro';
import './App.css';
import'./star.css';


function App() {
  
  return (
     <BrowserRouter>
     <div className='min-h-screen relative text-white'>
      <div className='stars-background'></div>
      <div className='relative z-10'>
      <Navbar /> 
      <div className='pt-4 px-6'>
      <Routes>
 
      <Route path="/" element={<Home />} />
      <Route path="/galaxias" element={<Galaxias />} /> 
      <Route path="/planetas" element={<Planetas />} />
      <Route path="/constelaciones" element={<Constelacion />} />
      <Route path="/meteoro" element={<Meteoro />} />
      <Route path="/galeria" element={<Galeria />} />
      <Route path="/curiosidades" element={<FunFacts />} />



        
      </Routes>
      </div>
      </div>
      </div>
    </BrowserRouter>

 
   
  );
}

export default App
