import React from 'react'
import './Loginform.css'
import { FaUsers, FaLock } from "react-icons/fa";


function LoginForm () {
return(

    <div className='wrapper'>
    <form>
<h1>Login</h1>
<div className='input-box'>
<input type='text' placeholder='Username' required/>
<FaUsers className='icon'/>
</div> 
<div className='input-box'>
<input type='password' placeholder='Password' required/>
<FaLock className='icon' />
</div>

<div className='remeber-forgot'>
<label> <input type='checkbox'/> Remember me</label>
<a href='#'>forgot password</a>
</div>
<button type='submit'> Login </button>

<div className='register-link'>
    <p> don have an account? <a href='#'>Register</a></p>

</div>

    </form>
    </div>
)



} 
export default LoginForm;