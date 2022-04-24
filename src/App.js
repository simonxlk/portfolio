//import logo from './logo.svg';
import './App.css';
import Intro from './components/intro';
import ProductList from './components/ProductList';
import Contact from './components/Contact';
import Sect1 from './components/sect1';

function App() {
  return (
    <div className="App">
      <Sect1 />
      <ProductList />
      <Contact />
    </div>
  );
}

export default App;
