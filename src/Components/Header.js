import React from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'

const Header = () => {

const logout = () => {
    axios.get('/api/logout')
    .then(() => alert('You are now logged out!'))
}
return (
<header>
    <Link to='/'><button onClick={logout}>Logout</button></Link>
</header>
)
}
export default Header