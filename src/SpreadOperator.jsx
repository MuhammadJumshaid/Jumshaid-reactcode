import React from 'react'

const SpreadOperator = () => {
const fruits=["Banana", "Mango","Apple"]
const moreFruits = [...fruits,"Cherry", "Grapes"]
console.log("moreFruits", moreFruits)    // (5) ['Banana', 'Mango', 'Apple', 'Cherry', 'Grapes']

const AllFruits = [...fruits, ...moreFruits, "Orange", "Peach"]
console.log(AllFruits)


const student1 = {
    "Name" : "Kamran", 
    "age" : 23,
}
const student2 = {
    ...student1,
    "class" : "10th"
}
console.log(student1.class) // undefined
console.log(student2.Name) // Kamran
console.log(student2.class) // 10th

  return (
    <div>
      <h1>Spread Operator Javascript</h1>
    </div>
  )
}

export default SpreadOperator
