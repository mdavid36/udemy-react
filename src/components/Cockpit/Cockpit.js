import React, { useEffect } from 'react'
import './Cockpit.css'
import Radium from 'radium'


const Cockpit = (props) => {

  useEffect(() => {
    console.log("%%%Cockpit useEffect")
    setTimeout(() => {
      alert('Saved Data to Cloud!')
    }, 1000)
    return () => console.log('Cockpit.js Cleanup code')
  }, [])

  useEffect(() => {
    console.log("%%%Cockpit 2nd useEffect")
    return () => console.log('Cockpit.js 2nd Cleanup code')
  })

  let buttonClasses = ''
  if (props.showPersons) {
    buttonClasses = 'red';
    }

  const bannerClasses = [];
  if (props.personsLength <= 2) {
    bannerClasses.push('green')
  }
  if (props.personsLength <= 1) {
    bannerClasses.push('bold')
  }

  const bannerClassesString = bannerClasses.join(' ');

  return (
    <div className='cockpit'>
      <p className={bannerClassesString}>{props.title}</p>
      <button className={buttonClasses} onClick={props.clicked}>Switch Name</button>
    </div>
  )
}

export default React.memo(Radium(Cockpit))