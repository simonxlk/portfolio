
import './App.css';
//import Intro from './components/intro';
import ProductList from './components/ProductList';
import Contact from './components/Contact';
import Sect1 from './components/sect1';
import Skills from './components/Skills';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/"
            element={<Sect1 />}
          />
          <Route path="skills"
            element={<Skills />}
          />
          <Route path="projects"
            element={<ProductList />}
          />
          <Route path="contact"
            element={<Contact />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
