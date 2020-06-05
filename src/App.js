import React from 'react';
import './App.css';
import routes from './routes'
import {withRouter} from 'react-router-dom'
import Header from './Components/Header'

function App(props) {
  return (
    <div className="App">
      {props.location.pathname === '/' ? 
      (<>
      {routes}
      </>
      ) : (
      <>
      <Header />
      {routes}
      </>
      )}
    </div>
  );
}

export default withRouter(App);
