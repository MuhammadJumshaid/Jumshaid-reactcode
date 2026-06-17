import { useState } from "react"

function Assignment1(){

    const [count , setCount ] = useState(1)
    return(
        <>
        <h1>Hit Counter</h1>    
        <h1>Counter : {count} </h1>
        <button style={{width : '50px'}} onClick={()=>setCount(count+1)}>+</button>
        </>
    )

}
export default Assignment1