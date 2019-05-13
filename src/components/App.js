import React, { Component } from 'react';
import '../css/App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Header from './Header';
import Footer from './Footer';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />

        <Router>
          <div className="container">

            <nav>
              <ul>
                <li>
                  <Link to="/"><img /></Link>
                </li>
                <li>
                  <Link to="/Login/">Login</Link>
                </li>
                <li>
                  <Link to="/Notification/">Notifications</Link>
                </li>
                <li>
                  <Link to="/Cart/"><img /></Link>
                </li>
              </ul>
            </nav>

            <Route path="/" exact component={App} />
            <Route path="/Login/" component={Login} />
            <Route path="/Notification/" component={Notification} />
            <Route path="/Cart/" component={Cart} />

          </div>
        </Router>

        <section>
          
        </section>
        <Footer />
      </div>
    )

  }
}

export default App;
