import React, { Component } from 'react'
import classes from './Person.module.css'
import CustomFragment from '../../../higherOrderComponents/CustomFragment';
import withClass from '../../../higherOrderComponents/withClass';


class Person extends Component {
  render () {
    console.log('####Person.js rendering...')
    return (
      <CustomFragment>
        <p onClick={this.props.click}>My name is {this.props.name} and I am {this.props.age}</p>
        <p>{this.props.children}</p>
        <input type="text" onChange={this.props.changed} defaultValue={this.props.name} />
      </CustomFragment>
    )
  }
}

export default withClass(Person, classes.Person)