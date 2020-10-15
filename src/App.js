import React from 'react';
import './App.css';
import {Link, Route} from 'react-router-dom';
import config from './routesConfig';
import Footer from './pages/footer/footer';

function App() {
  return (
    <div className="App">
      <header className="py-3 header">
      <nav className="nav-links">
        <Link className='px-2' to="/">home</Link>
        <Link className='px-2' to="/user">user</Link>
        <Link to="/login">login</Link>
      </nav>
      </header>
      {config.map(
      (value, key) => {
        return <Route key={key} path={value.path} component={value.component} exact={value.exact} 
        ></Route>
      }
      )}
      <Footer></Footer>
    </div>
  );
}

export default App;