import './App.css';
import IndividualIntervalsExample from './components/Carousel/IndividualIntervalsExample.jsx';
import Navbar from './components/Navbar/Navbar'
import PresentationDani from './components/PresentationDani/PresentationDani';
import Promotions from './components/promotions/Promotion';

function App() {
  return (
    <div className="App">
      <PresentationDani/>
      <Navbar/>
      <Promotions/>
   </div>
  );
}

export default App;
