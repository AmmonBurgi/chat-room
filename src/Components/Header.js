import React, {useEffect} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'
import styled from 'styled-components'
import {connect} from 'react-redux'
import {getUser} from '../redux/reducer'

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

useEffect(() => {
    if(Object.keys(props.user).length === 0){
axios.get('/api/session')
.then((res) => {
    props.getUser(res.data)
}).catch(err => console.log(err))
    }
}, [])

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

export default connect(mapStateToProps, {getUser})(Header)