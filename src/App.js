
import './App.css';
import Header from './Header';
import Home from './Home';
import Login from './Login';
import { Toaster } from 'react-hot-toast';
import { auth } from "./firebase";    
import { onAuthStateChanged } from "firebase/auth";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Checkout from './Checkout';
import Register from './Register';
import { useStateValue } from "./StateProvider";
import { useEffect } from 'react';
import Payment from './Payment';




function App() {
  const [{user}, dispatch] = useStateValue()
  useEffect(() => {

    onAuthStateChanged(auth,(AuthUser) => {
        if(AuthUser){ // login
            console.log("USER",AuthUser)
            dispatch({
                type:"SET_USER",
                user:AuthUser,  
            })
        }else{ // log out
            dispatch({
                type:"SET_USER",
                user: null,
            })

        }
    })
}, [user])
  return (
    <>
    <Toaster position="top-right" />
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Header />}>
        <Route path="/checkout" element={<Checkout />} />
        <Route path='/' element={<Home />} />

        <Route path="/login" element={<Login />} />

          <Route path="/payment" element={<Payment />} />

        </Route>

        <Route path="/register" element={<Register />} />



        
    </Routes>
  </BrowserRouter>
  </>



  )
}

export default App;
