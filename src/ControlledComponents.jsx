import React, { useState } from 'react'

function ControlledComponents() {

    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [pnoneNo, setPhoneNo] = useState("");


    function changeState(){
    setName("")    
    setPassword("")    
    setPhoneNo("")    
    }

  return (
    <div >
        <h1 style={{lineHeight : '1.2'}}>Controlled Components(Components controlled by react state)</h1> 
        {/* line-height: 1 → 50px between lines */}
      

      {/* <form style={{textAlign : 'center', width : '500px', background :'grey'}}> */}
        <input value={name} onChange={(event)=>setName(event.target.value)} type='text' placeholder='Enter your Name'/>
        <br/><br/>
        <input onChange={(event)=>setPassword(event.target.value)} type='password' placeholder='Enter your Password'/>
        <br/><br/>
        <input onChange={(event)=>setPhoneNo(event.target.value)} type='number' placeholder='Enter your Ph.No'/>
        <br/><br/>
        <button type='submit'>Sumbit</button>
        <button onClick={changeState} >Reset</button>
      {/* </form> */}

      <h2>{name}</h2>
      <h2>{password}</h2>
      <h2>{pnoneNo}</h2>
    </div>
  )
}

export default ControlledComponents
