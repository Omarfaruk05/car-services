import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import "./Register.css"

const Register = () => {
    const navigate = useNavigate();

    // const navigateLogin = () => {
    //     navigate('/login');
    // }
    return (
        <div className='register-form'>
            <h1>Please Register</h1>
            <form>
                <input type="text" placeholder='Your name' />
                <input type="email" name="email" id="" placeholder='Your Email'/>
                <input type="password" name='password' id='' placeholder='Your Password' />
                <input type="submit" value="Register" />
            </form>
            <p>Already have an account? <Link to={'/login'} className='text-danger text-decoration-none' >Please Login</Link></p>
        </div>
    );
};

export default Register;