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
      showPersons: false,
    }
  }

  switchNameHandler = (newName) => {
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

  togglePersons = () => {
    const shouldShow = this.state.showPersons;
    this.setState({showPersons: !shouldShow})
  }

  render() {

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          <Person person={this.state.people[0]} />
          <Person
            person={this.state.people[1]}
            click={this.switchNameHandler.bind(this, 'Porky')}
            changed={this.nameChangedHandler}
          >My interests Dirt bikes</Person>
          <Person person={this.state.people[2]} />
        </div>
      )
    }

    return (
      <div className="App">
        <p>Howdy</p>
        <button onClick={this.togglePersons}>Switch Name</button>
        {persons}
      </div>
    );
  }
}

export default App;
