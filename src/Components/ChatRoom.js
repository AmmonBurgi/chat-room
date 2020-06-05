import React from 'react'
import {connect} from 'react-redux'

const ChatRoom = (props) => {
    console.log(props)
return (
    <div className='ChatRoom'>
        I'm the ChatRoom Component
    </div>
)
}

const mapStateToProps = (reduxState) => reduxState

export default connect(mapStateToProps)(ChatRoom)