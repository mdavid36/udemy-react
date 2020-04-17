import React from 'react'

export default function Person(props) {
  return (
    <div>
      <p>My name is {props.name} and I am {props.age}</p>
      <p>{props.children}</p>
    </div>
  )
}
