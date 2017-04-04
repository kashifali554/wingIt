import React, { Component } from 'react';
import Nav from './Nav.js';
import Search from './Search.js';
import { Link } from 'react-router-dom';
import { isLoggedIn } from './AuthService';
import './index.css';


class Main extends Component {
  render() {
    return (
      <div className="mainPage">
        <Nav/>
        <h1 className="homeTitle">Wing It Travel App<span className="glyphicon glyphicon-heart-empty" aria-hidden="true"></span></h1>
        <Search/>
        <div className="col-sm-12">
          { isLoggedIn() ?
          <div className="jumbotron text-center">
            <h2>Explore Cities Around the World</h2>
            <Link className="btn btn-lg btn-info" to='/cities'>Cities</Link>
            </div> : <div className="jumbotron text-center"><h2>Get Access to our Community of Travelers By Logging In</h2></div>
          }
        </div>
      </div>
    );
  }
}


export default Main;