import './App.css';
import Navbar from './Component/Navbar';
import Footer from './Component/Footer';
import MainRoute from './AllRoutes/MainRoute';

function App() {
  return (
    <div className="App">
     <Navbar/>
     <MainRoute/>
     <Footer/>
    </div>
  );
}

export default App;
