import React, {useState} from 'react';
import './App.css';
import routes from './routes'
import {withRouter} from 'react-router-dom'
function App() {
  const [user, setUser] = useState({})

console.log(routes)
  return (
    <div className="App">
      {routes}
    </div>
  );
}

export default withRouter(App);
