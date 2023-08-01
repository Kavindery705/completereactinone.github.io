import React from 'react'
import SecondPropsDril from './SecondPropsDril'
import { Link } from 'react-router-dom'

const FirstPropsDril = (props) => {
  return (
    <div>
        FirstPropsDril {props.info} 
        <SecondPropsDril info={props.info}/>
        {/* <Link to={'/secondprops'}>Second</Link> */}
        </div>

  )
}

export default FirstPropsDril