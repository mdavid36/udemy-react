import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      people: [
        { name: 'Matt', age: 32 },
        { name: 'Erin', age: 22 },
        { name: 'Greg', age: 42 },
      ],
      otherState: true
    }
  }

  switchNameHandler = (newName) => {
    // console.log('CLIck my ass')
    // this.state.persons[0].name = 'DUDE'
    this.setState({
      people: [
        { name: newName, age: 32 },
        { name: 'Erin', age: 22 },
        { name: 'Greg', age: 100 },
      ]
    })
  }

  nameChangedHandler = (event) => {
    this.setState({
      people: [
        { name: 'Max', age: 32 },
        { name: event.target.value, age: 22 },
        { name: 'Greg', age: 100 },
      ]
    })
  }

  render() {
    return (
      <div className="App">
        <p>Howdy</p>
        <button onClick={this.switchNameHandler.bind(this, 'DudeBro')}>Switch Name</button>
        <Person person={this.state.people[0]} />
        <Person
          person={this.state.people[1]}
          click={this.switchNameHandler.bind(this, 'Porky')}
          changed={this.nameChangedHandler}
        >My interests Dirt bikes</Person>
        <Person person={this.state.people[2]} />
      </div>
    );
  }
}

export default App;
