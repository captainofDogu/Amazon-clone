import React from 'react'
import "./Login.css"
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { getAuth } from "firebase/auth";
import { login } from './firebase'


const Login = () => {

    const auth = getAuth();
    const user = auth.currentUser;
    const navigate = useNavigate()
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')

    const signIn = (e) => {
        e.preventDefault()
        login(email,password)
        
            navigate("/",{replace:true})

        
    }



  return (
    <div className='login'>
        <Link to="/">
            <img className='login__logo'
             src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png' />
        </Link>

        <div className='login__container'>
            <h1>Sign İn</h1>
            <form>
                <h5>E-mail</h5>
                <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />

                <h5>Password</h5>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}  />

                <button type='submit' onClick={signIn} className='login__signInButton'>Giriş Yap</button>
            </form>
            <p>
                    By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use & Sale. Please
                    see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
            </p>
        </div>
    </div>
  )
}

export default Login