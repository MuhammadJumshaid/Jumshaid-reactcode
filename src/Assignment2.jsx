import { useState } from "react"

function Assignment2(){

    const [count , setCount] = useState(1)
    return(
        <>
        <h1>Counter</h1>
        <h1>Count : {count}</h1>
        <div  style={{display : 'flex', gap : '20px'}}>
        <button style={{width : '50px', fontSize : '40px'}} onClick={()=>setCount(count+1)}>+</button>
        <button style={{width : '50px', fontSize : '40px'}} onClick={()=>setCount(count-1)}>-</button>
        </div>
        </>
    )
}
export default Assignment2