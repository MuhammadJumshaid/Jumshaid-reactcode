import React, { useState } from 'react'

const InputBoxData = () => {
    // const [inputData, setInputData] = useState("Muhammad Jumshaid")
    const [inputData, setInputData] = useState("")
  return (
    <div style={{margin : '20px'}}>
        <h1>Input Box Data</h1>
        {/* <input onChange={(event)=>console.log(event.target.value)} type='text' placeholder="enter you name"/> */}
        {/* <input onChange={(event)=>setInputData(event.target.value)} type='text' placeholder="enter you name"/>
        <h1>{inputData}</h1> */}
        <input value={inputData} onChange={(event)=>setInputData(event.target.value)} type='text' placeholder="enter you name"/>
        <h1>{inputData}</h1>

        <button onClick={()=>setInputData("")} style={{width : "100px", padding : '10px'}}>Reset</button>
    </div>
  )
}

export default InputBoxData
