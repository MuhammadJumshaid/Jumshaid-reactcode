// import React from 'react'

const ArrayProps = (props) => {
// const ArrayProps = ({emplyoeeName}) => {
    // console.log("props",emplyoeeName[0])
  return (
    <div>
      <h1>Array with Prop</h1>
      {/* <h2>{emplyoeeName}</h2>
      <h2>{emplyoeeName[2]}</h2> */}
      <h2>{props.emplyoeeName}</h2> 
      <h2>{props.emplyoeeName[1]}</h2> 
      <h2>{props.emplyoeeName[2]}</h2> 

    </div>
  )
}

export default ArrayProps
