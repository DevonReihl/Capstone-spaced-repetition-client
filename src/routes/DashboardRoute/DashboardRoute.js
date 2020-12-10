import React, { Component } from 'react'
import Button from '../../components/Button/Button'
import { Link } from 'react-router-dom'
import UserContext from '../../contexts/UserContext'
import Language from '../../components/Language/Language'
import Words from '../../components/Words/Words'
import './DashboardRoute.css'


class DashboardRoute extends Component {
  static contextType = UserContext
  
  render() {
    return (
      <section>
        <h2>Welcome back {this.context.user.name} </h2>
        <Language />
        <h3>Words to practice</h3>
        <div>
          <Link to='learn'><Button>Start practicing</Button></Link>
          <ul className='words-table'>
            <Words />
          </ul>
        </div>
      </section>
    );
  }
}

export default DashboardRoute
