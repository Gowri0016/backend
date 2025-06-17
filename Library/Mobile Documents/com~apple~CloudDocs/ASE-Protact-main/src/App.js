import { Route, Routes } from 'react-router';
import './App.css';
import Detail from './Component/Detail';
import About from './Component/About';
import Services from './Component/Services';
import Contact from './Component/Contact';
import Header from './Component/Header';
import Footer from './Component/Footer';

function App() {
  return (
    <div className="App">
      
      <Header />
      <Routes>
        <Route path='/' element={<Detail />} />
        <Route path='/About' element={<About />} />
        <Route path='/Contact' element={<Contact />} />
        <Route path='/Services' element={<Services />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;