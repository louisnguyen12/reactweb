import React, { Component } from 'react';
import '../css/Header.css';
import '../css/App.css';

class Header extends Component {
    render() {
      return (
        <div className="App">
          <div class="container">
            <div id="branding">
            <h1><span class="highlight">Froot</span>hies</h1>
            </div>
            
          </div>
        </div>
      )
    }
  }
  
  export default Header;