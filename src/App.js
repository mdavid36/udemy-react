import React from 'react';
import './App.css';
import Person from './Person/Person';

function App() {
  return (
    <div className="App">
      <p>Howdy</p>
      <Person name='Matt' age='32'/>
      <Person name='Erin' age='22'>My interests Dirtbikes</Person>
      <Person name='Greg' age='42'/>
    </div>
  );
}

export default App;
