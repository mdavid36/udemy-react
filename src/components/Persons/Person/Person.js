import React, { Component } from 'react'

import classes from './Person.module.css'
import CustomFragment from '../../../higherOrderComponents/CustomFragment';
import withClass from '../../../higherOrderComponents/withClass';
import AuthContext from '../../../context/auth-context'


class Person extends Component {

  constructor(props){
    super(props)
    this.inputElementRef = React.createRef()
  }

  static contextType = AuthContext

  componentDidMount() {
    // this.thing.focus()
    this.inputElementRef.current.focus()
    console.log('>>>>> this.context.authenticated', this.context.authenticated);
  }
  render () {
    console.log('Person isAuth prop', this.props.isAuth)
    return (
      <CustomFragment>
        { this.context.authenticated ? <p>Logged In!</p> : <p>Please Authenticate</p> }
        <p onClick={this.props.click}>
          My name is {this.props.name} and I am {this.props.age}
        </p>
        <p>{this.props.children}</p>
        <input 
          // ref ={(inputEl) => {this.thing = inputEl}}
          ref ={this.inputElementRef}
          type="text" 
          onChange={this.props.changed} 
          defaultValue={this.props.name} 
        />
      </CustomFragment>
    )
  }
}

export default withClass(Person, classes.Person)