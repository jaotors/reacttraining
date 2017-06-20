import React from 'react'
var Link = require('react-router-dom').Link;

class Home extends React.Component {
  render() {
    return(
      <div className="home-container">
        <h1>Github Battle, battle your friends.... and stuffs</h1>

        <Link className="button" to='/battle'>battle</Link>
      </div>
    )
  }
}

module.exports = Home;