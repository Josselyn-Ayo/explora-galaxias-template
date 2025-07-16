import {BrowserRouter, Routes,Route} from'react-router-dom';
import Navbar from './components/Navbar';
import './App.css';
import'./star.css';
import FunFactCard from './components/FunFactCard';
import Home from './pages/home';
import Galaxias from './pages/Galaxias';
import Planetas from './pages/Planetas';
import Constelacion from './pages/Constelacion';
import Galeria from './pages/Galeria';


function App() {
  
  return (
     <BrowserRouter>
     <div className='min-h-screen relative text-white'>
      <div className='stars-background'></div>
      <div className='relative z-10'>
      <Navbar /> 
      <div className='pt-4 px-6'>
      <Routes>
 
      
      <Route path="/curiosidades" element={<FunFactCard />} />
      <Route path="/" element={<Home />} />
      <Route path="/galaxias" element={<Galaxias />} /> 
      <Route path="/planetas" element={<Planetas />} />
      <Route path="/constelaciones" element={<Constelacion />} />
      <Route path="/galeria" element={<Galeria />} />



        
      </Routes>
      </div>
      </div>
      </div>
    </BrowserRouter>

 
   
  );
}

export default App
