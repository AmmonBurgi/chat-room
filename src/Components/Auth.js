import React, {useState} from 'react'
import {getUser} from '../redux/reducer'
import {connect} from 'react-redux'
import axios from 'axios'

const Auth = (props) => {
    const [username, setUsername] = useState(''),
    [email, setEmail] = useState(''),
    [password, setPassword] = useState(''),
    [toggle, setToggle] = useState(false)
    
const register = () => {
    axios.post('/api/register', {email, username, password})
    .then(res => {
        console.log(res)
        props.getUser(res.data)
        props.history.push('/chat')
    }).catch(err => console.log(err.response.data))
}
const login = () => {
    axios.post('/api/login', {email, password})
    .then(res => {
        props.getUser(res.data)
        props.history.push('/chat')
    }).catch(err => console.log(err.response.data))
}
return (
    <div className='Auth'>
        {toggle === false ? 
        (
        <div>
           <input className='email' placeholder='Email' onChange={(e) => setEmail(e.target.value)} />
           <input className='password' placeholder='Password' onChange={(e) => setPassword(e.target.value)} />
           <button onClick={login}>Login</button>
           <span>Need an account?<p onClick={() => setToggle(!toggle)}>Register</p></span>
        </div>
        ) : (
        <div>
           <input className='email' placeholder='Email' onChange={(e) => setEmail(e.target.value)} />
           <input className='username' placeholder='Username' onChange={(e) => setUsername(e.target.value)} />
           <input className='password' placeholder='Password' onChange={(e) => setPassword(e.target.value)} />
           <button onClick={register}>Register</button>
           <span>Already have an account?<p onClick={() => setToggle(!toggle)}>Login</p></span>
        </div>
        )}
    </div>
)
}


export default connect(null, {getUser})(Auth)