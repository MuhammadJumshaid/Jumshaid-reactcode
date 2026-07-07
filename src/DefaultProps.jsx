import React from 'react'

const DefaultProps = ({userName="Muhammad"}) => {
  return (
    <div>
      <h1>Default Props Value</h1>
      <h1>UserName : {userName}</h1>
    </div>
  )
}

export default DefaultProps
