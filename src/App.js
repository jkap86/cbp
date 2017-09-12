import React, { Component } from 'react';
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <nav>
          <div className="Navbar-header">
            <img src='images/USFlag.png'/>
              <wbr/> Official Website of the Department of Homeland Security 
              &nbsp; &nbsp; &nbsp; &nbsp;
              <button type="button">Language</button>
          </div> 
        </nav>
        <div className="App-header">
          <h2>U.S. Customs and Border Protection</h2>
          <img src='images/logo.png'/>
        </div>
        <body>
        <p className="App-intro">
          This is Your CBP
        </p>
        <div className="App-main">
            <div className="Main-link" align="justify">
                <table>
                  <tr>
                  <td>
                    <img src="images/travel.jpeg" height="225" width="225" />
                    <br/>
                    <a href="Travel.js">Travel</a> 
                  </td>
                  <td>
                    <img src="images/trade.jpg" height="225" width="225" />
                    <br/>
                    <a href="Trade.js">Trade</a>
                  </td>
                  <td>
                    <img src="images/media.jpg" height="225" width="225" />
                    <br/>  
                    <a href="Media.js">Media</a>
                  </td>
                  <td>
                    <img src="images/careers.jpg" height="225" width="225" />
                    <br/> 
                    <a href="Careers.js">Careers</a>
                  </td>
                  </tr>
                </table>
            </div>
        </div>
        <footer>
          <div className="Link-icon">
            <a href="https://www.linkedin.com/company/2997?trk=tyah" target="_blank"><img src="images/logo-linkedin.png" height="30" /></a>
            &nbsp;
            <a href="https://twitter.com/CustomsBorder" target="_blank"><img src="images/logo-twitter.jpeg" height="30"/></a>
          </div>
        </footer>
        </body>
      </div>
    );
  }
}

export default App;

