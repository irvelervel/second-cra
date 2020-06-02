// FUNCTIONAL COMPONENT --> props
// CLASS BASED COMPONENT --> props, state, lifecycle methods
import React from 'react'

const NewComponent = (props) => {
  console.log('props in NewComponent', props)
  return (
    <div>
      <ul>
        {props.elements.map(
          (element, index) => <li key={index}>{element}</li>
        )}
      </ul>
    </div>
  )
}

export default NewComponent