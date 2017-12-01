import React, { Component } from 'react';
import logo from '../../capslock.svg';
import './App.css';
import {Link} from 'react-router-dom';


class App extends Component {
  render() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <h1 className="App-title">Welcome to CapsLock Corp</h1>
                <nav className="App-navbar" role="navigation" aria-label="main navigation">
                <div class="navbar-brand">
                    <Link to='/' class="navbar-item">Home</Link> 
                    <Link to='/gallery' class="navbar-item" >Gallery</Link> 
                    <Link to='/profile' class="navbar-item">Profile</Link>
                </div>
                </nav>
            </header>
            {this.props.children}
        </div>
    );
  }
}

export default App;


