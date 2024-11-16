import React, { useState } from 'react';
import { Link,useNavigate} from 'react-router-dom';
import axios from 'axios';

export const Signup = () => {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate=useNavigate()
  const handleSubmit = (e)=>{
    e.preventDefault()
    axios.post('http://localhost:5000/api/signup',{name, email, password})
    .then(result=> {console.log(result)
      navigate('/Login')
    })
    .catch(err => console.log(err))
  }

  return (
    <section className='Signup-section'>
    <div className='main-div'>
        <div className='div-1'>
        <h4>Welocome to Signup </h4>
        <form onSubmit={handleSubmit}>
            <label>Name :</label>
            <input type='text'  required  placeholder='Enter Your Name' onChange={(e)=> setName(e.target.value)}/>
            <label>Email :</label>
            <input type='Email' required placeholder='Enter Your Email' onChange={(e)=> setEmail(e.target.value)}/>
            <label>Password</label>
            <input type='password' required placeholder='Enter Your Password' onChange={(e)=> setPassword(e.target.value)}/>
            <button>Sign Up</button>
        </form>
        
        </div>
        <h6>if you have An Account?<Link to ='/Login'>Login</Link></h6>
    </div>
    </section>
  )
}
