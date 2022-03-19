//* class component ..generally not useable

import React, { Component } from 'react'

class Footer extends Component {
  render() {
    return (
      <div>
          <p style={newStyle}>Copyraight {new Date().getFullYear() + ' by ersenozturk'}</p>
      </div>
    )
  }
}

export default Footer;


const newStyle = {
    padding: "1rem",
    textAlign: "center",
    backgroundColor: "black",
    color: "white",
}