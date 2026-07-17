import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import About from './AboutMe';
import Infinity from './Infinity';
// import Projects from './pages/Projects';
// import Contact from './pages/Contact';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/Infinity" element={<Infinity/>} />
      
        {/* <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;