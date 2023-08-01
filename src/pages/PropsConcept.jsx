import React from 'react'
import Mycomponentprops from './Mycomponentprops';
import ManualProps from './ManualProps'
const PropsConcept = () => {
    console.log(ManualProps);
  return (
    <div>
      <div className="mainComponent">

      <Mycomponentprops info={ManualProps}/>
      {/* <Mycomponentprops info='night' fees='2000'/> */}
      </div>
    </div>
  )
}

export default PropsConcept