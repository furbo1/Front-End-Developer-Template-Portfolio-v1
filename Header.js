import React, { Component } from 'react'
import particles from 'particles.js'

export default class Header extends Component {
  render () {
    return (

      <header>

        <div id='logo'>

          <h1>&lt; Alex Cocan | Front End Developer /&gt;</h1>
          <p>| Responsive | Web | Design |</p>

        </div>

        <nav id="main-nav">
        
          <ul>
            <li> <a class="left" href='#logo'> Home </a>
            </li> <li> <a class="left" href='#projects'> Projects </a>
            </li> <li> <a class="left" href='#description'> About Me </a>
            </li> <li> <a class="left" href='#form'> Contact</a>
            </li>
          </ul>
        </nav>
      </header>

    )
  }
}
