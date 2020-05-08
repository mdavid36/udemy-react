import React, { useEffect, useRef, useContext } from 'react'
import './Cockpit.css'
import Radium from 'radium'
import AuthContext from '../../context/auth-context'


const Cockpit = (props) => {

  const toggleButtonRef = useRef(null);
  const authContext = useContext(AuthContext)

  console.log("^^^^", authContext.authenticated)

  useEffect(() => {
    // console.log("%%%Cockpit useEffect")
    toggleButtonRef.current.click()
    // setTimeout(() => {
    //   alert('Saved Data to Cloud!')
    // }, 1000)
  }, [])

  // useEffect(() => {
  //   console.log("%%%Cockpit 2nd useEffect")
  //   return () => console.log('Cockpit.js 2nd Cleanup code')
  // })

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
      <button ref={toggleButtonRef} className={buttonClasses} onClick={props.clicked}>Switch Name</button>
      <button onClick={authContext.login}>Login</button>
      
    </div>
  )
}

export default React.memo(Radium(Cockpit))