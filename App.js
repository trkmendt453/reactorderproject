
import './App.css';
import {Routes,Route} from 'react-router-dom'
import About from './components/About';
import Home from './components/Home';
import Contact from './components/Contact';
import Menü from './components/Menü';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' exact element={<Home />} />
        <Route path='/menu' exact element={<Menü />}/>
        <Route path='/about' exact element={<About />}/>
        <Route path='/contact' exact element={< Contact />}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
