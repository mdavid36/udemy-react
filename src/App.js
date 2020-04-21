import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      persons: [
        { id: 'oais', name: 'Matt', age: 32 },
        { id: 'asdf', name: 'Erin', age: 22 },
        { id: 'qcwf', name: 'Greg', age: 42 },
      ],
      showPersons: false,
    }
  }

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons })
  }

  nameChangedHandler = (event, id) => {
    const indexToMatch = this.state.persons.findIndex(person => {
      return person.id === id
    });
    const personInstance = { ...this.state.persons[indexToMatch] };
    personInstance.name = event.target.value;
    const newPersons = [...this.state.persons];
    newPersons[indexToMatch] = personInstance;

    this.setState({
      persons: newPersons
    });
  }

  togglePersons = () => {
    const shouldShow = this.state.showPersons;
    this.setState({ showPersons: !shouldShow })
  }

  render() {

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person
              click={() => this.deletePersonHandler(index)}
              name={person.name}
              age={person.age}
              key={person.id}
              changed={(event) => this.nameChangedHandler(event, person.id)} />
          })}
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
