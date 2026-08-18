import React from 'react'

const EmpCard = ({data}) => {
  return (
    <div style={{'border' : '2px solid green', width : '450px', padding : '10px', margin : '10px', 'borderRadius' : '10px', backgroundColor : 'lightsalmon '}} >
      {/* <h1 style={{color : 'red'}}>Employee Card</h1> */}
      <h1 style={{color : 'red', 'fontWeight' : 'bold', textAlign : 'center'}}>{data.Name} Card</h1>
     <h2>  Emp Id : <span style={{color : 'green'}}>{data.Id}</span>  </h2>
     <h2>Emp Name : <span style={{color : 'green'}}> {data.Name} </span></h2>
     <h2>Emp Age : <span style={{color : 'green'}}> {data.Age} </span></h2>
     <h2>Emp Salary : <span style={{color : 'green'}}> {data.Salary} </span></h2>
     <h2>Emp Email : <span style={{color : 'green'}}> {data.Email} </span></h2>
    </div>
  )
}

export default EmpCard
