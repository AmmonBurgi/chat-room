import React from 'react'

const Auth = () => {
return (
    <div className='Auth'>
       <form>
           <input className='email' placeholder='Email' />
           <input className='username' placeholder='Username' />
           <input className='password' placeholder='Password' />
       </form>
    </div>
)
}

export default Auth