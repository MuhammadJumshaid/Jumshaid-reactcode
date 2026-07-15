import React from 'react'

const SpreadOperatorInReact = () => {
    const maleStudents  = ["Kamran", "Jumshaid", "Zaman", "Shoaib"]
    const femaleStudents = ["Fatima", "Aysha", "Hania", "Amna"]
    const allStudents=[...maleStudents, ...femaleStudents]
  return (
    <div>
        <h3>List of Students</h3>
      {/* {allStudents.map((student)=>student)} */}
      {
        allStudents.map((student, index)=>{
            return(
                <ul>
                    <li key={index}> {student}</li>
                   
                </ul>
            )
            
         })
      }
    </div>
  )
}

export default SpreadOperatorInReact
