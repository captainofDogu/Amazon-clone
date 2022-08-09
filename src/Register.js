import React from 'react'
import { useState } from 'react'
import { register as registerHandle } from './firebase'
import { useNavigate } from 'react-router-dom'
import { getAuth } from "firebase/auth";
import "./Register.css"
import { Link } from 'react-router-dom';

const Register = () => {

    const navigate = useNavigate()

    const auth = getAuth();
    const user = auth.currentUser;

    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')

    const Register = (e) => {
        e.preventDefault()
        registerHandle(email,password)
        console.log("kayıt ol",user)
        if(user){
            navigate("/login",{replace:true})
        }

    }
  return (
    <div className='login'>
    <Link to="/">
        <img className='login__logo'
         src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png' />
    </Link>
    <div className='login__container'>
        <h1>Register İn</h1>
        <form>
            <h5>E-mail</h5>
            <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />

            <h5>Password</h5>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}  />

            <button type='submit' onClick={Register} className='login__signInButton'>kayıt Ol</button>
        </form>

    </div>
    </div>

  )
}

export default Register