
import './App.css';
//import Intro from './components/intro';
import ProductList from './components/ProductList';
import Contact from './components/Contact';
import Sect1 from './components/sect1';
import Skills from './components/Skills';

function App() {
  return (
    <div className="App">
      <Sect1 />
      <Skills />
      <ProductList />
      <Contact />
    </div>
  );
}

export default App;
