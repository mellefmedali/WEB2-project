import './App.css';
import Decoration from './components/Decoration';
import Home from './components/Home';
import Industrie from './components/Industrie';
import { Sport } from './components/Sport';
import { Routes, Route } from 'react-router-dom';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CartDetails from './components/CartDetails';

function App() {
  return (
    <div className='container-fluid p-4'>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/sport' element={<Sport />} />
          <Route path='/sport/cartdetails' element={<CartDetails />} />
          <Route path='/industrie' element={<Industrie />} />
          <Route path='/decoration' element={<Decoration />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/*' element={<div>404... Not Found</div>} />
        </Routes>
        <Footer />
      </div>
    </div>
  );
}

export default App;
