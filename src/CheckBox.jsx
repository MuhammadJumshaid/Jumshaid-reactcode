import React, { useState } from 'react'

const CheckBox = () => {


  
    const [checkboxData, setCheckboxData] = useState([])


//     const changeState = (event)=>{
//       // const [value,checked] = event.target
//       console.log(event.target.value)
//       console.log(event.target.checked)
//       if (event.target.checked){
// setCheckboxData((prev)=> [...prev, event.target.value] )
//       }
// }
 const changeState = (event)=>{
      // const [value,checked] = event.target
      console.log(event.target.value)
      console.log(event.target.checked)
      if (event.target.checked){
setCheckboxData(()=> [...checkboxData, event.target.value] )
      }
      else{
        setCheckboxData([...checkboxData.filter((item) => (item!=event.target.value))])
      }


    }
  return (
    <div>
      <h1>CheckBox data</h1>
      <label htmlFor='React'>React</label>
      <input onChange={changeState} type='checkbox' id='React' value="React"/>  
      <br/>
      <br/>
      <label htmlFor='Html'>Html</label>
      <input onChange={changeState} type='checkbox' id='Html' value="Html"/>  
      <br/>
      <br/>
      <label htmlFor='Javascript'>Javascript</label>
      <input onChange={changeState} type='checkbox' id='Javascript' value="Javascript"/>  
      <br/>
      <br/>
      <label htmlFor='Css'>Css</label>
      <input onChange={changeState} type='checkbox' id='Css' value="Css"/>  
      <br/>
      <br/>
    
    <h2>{checkboxData.toString()}</h2>
     
    </div>
  )
}

export default CheckBox
