import React from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'
import styled from 'styled-components'
import {connect} from 'react-redux'

const Navbar = styled('header')`
width: 100vw;
border-bottom: solid black 2px;
height: 10vh;
display: flex;
justify-content: center;
align-items: center;
`;

const User = styled('p')`
font-size: 20px;
`
const Logout = styled(Link)`
position: absolute;
right: 10px;
`

const Header = (props) => {

const logout = () => {
    axios.get('/api/logout')
    .then(() => alert('You are now logged out!'))
}
return (
<Navbar>
<User>{props.user.username} is logged in!</User>
    <Logout to='/'><button onClick={logout}>Logout</button></Logout>
</Navbar>
)
}
const mapStateToProps = (reduxState) => reduxState

export default connect(mapStateToProps)(Header)