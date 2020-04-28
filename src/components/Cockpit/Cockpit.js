import React from 'react'
import './Cockpit.css'
import Radium from 'radium'


const Cockpit = (props) => {

  let buttonClasses = ''
  if (props.showPersons) {
    buttonClasses = 'red';
    }
    
  const bannerClasses = [];
  if (props.persons.length <= 2) {
    bannerClasses.push('green')
  }
  if (props.persons.length <= 1) {
    bannerClasses.push('bold')
  }

  const bannerClassesString = bannerClasses.join(' ');

  return (
    <div className='cockpit'>
      <p className={bannerClassesString}>Howdy</p>
      <button className={buttonClasses} onClick={props.buttonClick}>Switch Name</button>
    </div>
  )
}

export default Radium(Cockpit)