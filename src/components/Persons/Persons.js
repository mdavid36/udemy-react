import React, { PureComponent } from 'react'
import Person from './Person/Person'

export default class Persons extends PureComponent {

  // shouldComponentUpdate(np, ns){
  //   console.log("Persons.js shouldComponentUpdate")
  //   if (np.persons !== this.props.persons){
  //     return true;
  //   }else {
  //     return false
  //   }
  // }

  render() {
    return (this.props.persons.map((person, index) => {
      return <Person
        click={() => this.props.clicked(index)}
        name={person.name}
        age={person.age}
        key={person.id}
        changed={(event) => this.props.changed(event, person.id)} />
    }))
  }
}

