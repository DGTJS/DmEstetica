import './App.css';
import Navbar from './components/Navbar/Navbar'
import PresentationDani from './components/PresentationDani/PresentationDani';
import Promotions from './components/promotions/Promotion';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <PresentationDani/>
      <Promotions/>
      <Footer/>
   </div>
  );
}

export default App;
