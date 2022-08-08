
import './App.css';
import Header from './Header';
import Home from './Home';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Checkout from './Checkout';

function App() {
  return (
    <BrowserRouter>
    <Routes>

      <Route path="/" element={<Header />}>
        <Route path="/checkout" element={<Checkout />} />
        <Route path='/' element={<Home />} />


        </Route>
    </Routes>
  </BrowserRouter>


/*     <div className="App">
      <Header />
      <Home /> 
    </div>
  ); */
  )
}

export default App;
