import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Pages/Landing/Landing';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Links from './components/Links/Links';
import Contact from './Pages/Contact/Contact';

const App = () => (
  <BrowserRouter>
  <Navbar />
  <Routes>
    <Route path='/' exact element={<Home />} />
    {/* <Route path='/about' element={<About />} />
    <Route path='/services' element={<Services />} /> */}
    <Route path='/contact' element={<Contact />} />
    {/* <Route path='/login' element={<Login />} />
    <Route path='/signup' element={<Signup />} /> */}
  </Routes>
  <Footer />
</BrowserRouter>
)

export default App;
