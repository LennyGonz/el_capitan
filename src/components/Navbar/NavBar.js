import React, { Component } from 'react';
import { MenuItems } from './MenuItems';
import { Button } from './Button';
import '../../styles/Navbar.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHamburger, faTimes } from '@fortawesome/free-solid-svg-icons'

library.add(fab, faHamburger, faTimes)

class NavBar extends Component {
  state = { clicked: false }

  handleClick = event => {
    this.setState({
      clicked: !event.this.state.clicked
    })
  }

  render() {
    return (
      <nav className="NavbarItems">
        <h1 className="navbar-logo">
          <FontAwesomeIcon icon={["fab", "apple"]} /> 
          React 
        </h1>
        <div className="menu-icon" onClick={this.handleClick}>
          <FontAwesomeIcon icon={this.state.clicked ? ['fas', 'times'] : ["fas", "hamburger"]} />
        </div>
        <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
          {MenuItems.map((item, index) => {
            return (
              <li key={index}>
                <a className={item.cName} href={item.url}>
                  {item.title}
                </a>
              </li>
            )
          })}
        </ul>
        <Button>Sign Up</Button>
      </nav>
    )
  }
}

export default NavBar;
