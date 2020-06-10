import React, {useState, useEffect} from 'react'
import {connect} from 'react-redux'
import io from 'socket.io-client'

const endpoint = 'http://localhost:4100/chat'
const socket = io(endpoint)

const ChatRoom = (props) => {
 
 useEffect(() => {

 }, [])
return (
    <div className='ChatRoom'>
        <section>
            <input placeholder='Message' />
            <button>Send</button>
        </section>
    </div>
)
}

const mapStateToProps = (reduxState) => reduxState

export default connect(mapStateToProps)(ChatRoom)