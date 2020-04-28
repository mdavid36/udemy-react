import React, { Component } from 'react';
import Radium from 'radium'
import './App.css';
import Persons from '../components/Persons/Persons';

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

    let style = {
      color: 'black',
      backgroundColor: 'blueviolet',
      borderRadius: '12px',
      padding: '10px',
      cursor: 'pointer',
      ':hover': {
        backgroundColor: 'lightgreen'
      }
  }

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          <Persons 
          persons={this.state.persons} 
          clicked={this.deletePersonHandler} 
          changed={this.nameChangedHandler}/>
        </div>
      )
      style.backgroundColor = 'red';
      style[':hover']= {
        backgroundColor: 'salmon',
        color: 'black'
      }
    }

    const classes = [];
    if(this.state.persons.length <= 2) {
      classes.push('green')
    }
    if(this.state.persons.length <= 1) {
      classes.push('bold')
    }

    const classesString = classes.join(' ');

    return (
      <div className="App">
        <p className={classesString}>Howdy</p>
        <button style={style} onClick={this.togglePersons}>Switch Name</button>
        {persons}
      </div>
    );
  }
}

export default Radium(App);
