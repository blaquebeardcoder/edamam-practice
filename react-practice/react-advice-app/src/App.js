import './App.css';
import Header from './components/Header';
import AdviceSlip from './components/AdviceSlip';
import Search from './components/Search'
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <AdviceSlip />
      <Footer />
      <Search />
    </div>
  );
}

export default App;