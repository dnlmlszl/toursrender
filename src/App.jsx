import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import bg3 from './assets/bg3.png';
import DelayedImage from './components/DelayedImage';

import HomePage from './pages/HomePage';
import About from './pages/About';
import Contact from './pages/Contact';
import Navbar from './components/Navbar';
import Tours from './pages/Tours';
import Tour from './pages/Tour';

function App() {
  return (
    <Router>
      <DelayedImage src={bg3} delay={1000} opacity={1}>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />}>
            <Route path="about" element={<About />} />
            <Route path="tours" element={<Tours />} />
            <Route path="tour/:id" element={<Tour />} />
            <Route path="contact" element={<Contact />} />
          </Route>
        </Routes>
      </DelayedImage>
    </Router>
  );
}

export default App;
