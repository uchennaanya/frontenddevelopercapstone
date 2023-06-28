import Home from './pages/Home';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavHeader from './components/NavHeader';
import Footer from './components/Footer';
import Bookings from './pages/Bookings';
import './App.css';

function App() {
  return (
    <>
    <BrowserRouter >
    <NavHeader />
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/bookings" element={<Bookings />} />
      </Routes>
      <Footer />
    </BrowserRouter>
    </>
  );
}

export default App;
