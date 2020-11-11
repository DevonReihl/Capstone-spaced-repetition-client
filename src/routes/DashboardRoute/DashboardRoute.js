import React, { Component } from 'react'
import Button from '../../components/Button/Button'
import { Link } from 'react-router-dom'
import UserContext from '../../contexts/UserContext';
import Language from '../../components/Language/Language'
import Words from '../../components/Words/Words'


class DashboardRoute extends Component {
  static contextType = UserContext


  render() {
    return (
      <section>
        <h2>Welcome back {this.context.user.name} </h2>
        <Language />
        <ul>
          <Words />
        </ul>
        <Link to='learning'><Button>Start Learning</Button></Link>
      </section>
    );
  }
}

export default DashboardRoute
