import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Profile from './pages/Profile';
import Show from './pages/Show';
import Contact from './pages/contact';
import Navbar from './components/Navbar';
import Footer from './components/footer';

export default function App() {
  return (
    <>
      <Navbar />
      {/* Add top padding to avoid hiding content behind fixed navbar */}
      <div className="pt-20 min-h-screen bg-gradient-to-br from-blue-100 to-blue-200">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/Show" element={<Show />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
      <Footer/>

    </>
  );
}
