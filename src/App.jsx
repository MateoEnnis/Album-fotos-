import './App.css';
import Header from './components/Header';
import Presentacion from './components/Presentacion';
import GaleriaDestacada from './components/GaleriaDestacada';
import Ciudades from './components/Ciudades';
import Footer from './components/Footer';

function App() {
  return (
    <div className="main-wrapper">
      <Header />
      <Presentacion />
      <GaleriaDestacada />
      <Ciudades />
      <Footer />
    </div>
  );
}

export default App;
