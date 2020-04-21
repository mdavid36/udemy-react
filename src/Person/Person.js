import React from 'react'
import './Person.css'

export default function Person(props) {
  return (
    <div className='Person'>
      <p onClick={props.click}>My name is {props.name} and I am {props.age}</p>
      <p>{props.children}</p>
      <input type="text" onChange={props.changed} defaultValue={props.name}/>
    </div>
  )
}
