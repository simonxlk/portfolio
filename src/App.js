import logo from './logo.svg';
import './App.css';
import Intro from './components/intro';
import ProductList from './components/ProductList';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <Intro />
      <ProductList />
      <Contact />
    </div>
  );
}

export default App;
