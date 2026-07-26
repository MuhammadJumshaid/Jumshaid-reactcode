import React, { use, useState } from 'react'

function RadioBtnAdnDropdown() {

  const [city, setCity] = useState("Taunsa")
  const [gender, setGender] = useState("Male");
  return (
    <div>
        <h1>Getting Checkbox and Dropdown Data</h1>
      <input checked={gender=="Male"} onChange={(e)=>setGender(e.target.value)} value="Male" type='radio' id='Male' name='Gender'/> 
      <label htmlFor='Male'>Male</label>
      <input checked={gender=="Female"} onChange={(e)=>setGender(e.target.value)} value={"Female"} id='Female' type='radio' name='Gender'/> 
      <label htmlFor='Female'>Female</label>
      <br/>
      <h2 style={{color : 'green'}}>Selected Gender : {gender}</h2>
    <div>
<br/>
      <select onChange={(e)=>setCity(e.target.value)} defaultValue={"Taunsa"}>
        <option value = "Lahore" >Lahore</option>
        <option value={"Karachi"}>Karachi</option>
        <option value={"Pisharar"}>Pishawar</option>
        <option value={"Taunsa Sharif"}>Taunsa</option>
        <option value={"Multan"}>Multan</option>
      </select>
<br/>
      <h2 style={{color : 'green'}}>Selected City : {city}</h2>
    </div>
    </div>
  )
}

export default RadioBtnAdnDropdown
