import React, { Component } from 'react';
import classes from './App.module.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import withClass from '../higherOrderComponents/withClass';
import CustomFragment from '../higherOrderComponents/CustomFragment';

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
      showCockpit: true,
      changeCounter: 0,
    }
    console.log("^^^In the constructor")
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

    this.setState((prevState, props) => {
      return {
        persons: newPersons,
        changeCounter: prevState.changeCounter + 1
      }
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
        <Persons
          persons={this.state.persons}
          clicked={this.deletePersonHandler}
          changed={this.nameChangedHandler} />
      )
    }

    console.log('>>>>> classes.App', classes.App);

    return (
      <CustomFragment classes={classes.App}>
        <button
          onClick={() => {
            this.setState({ 
              showCockpit: false
             })
          }
          }>Toggle Cockpit</button>
          {this.state.showCockpit ? 
            <Cockpit
              title={this.props.appTitle}
              personsLength={this.state.persons.length}
              showPersons={this.state.showPersons}
              clicked={this.togglePersons} />
              : null
        }
        {persons}
      </CustomFragment>
    );
  }
}

export default withClass(App, classes.App);
