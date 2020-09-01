import React, {useEffect} from 'react'
import {connect} from 'react-redux'
import io from 'socket.io-client'

const endpoint = 'http://localhost:4100/chat'
const socket = io(endpoint)

const ChatRoom = (props) => {
 
 useEffect(() => {
    socket.on('connect', () => {
        console.log()
    })
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