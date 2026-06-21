import { useState } from "react"
import MyImage from "./MyImage"

function ToggleButton(){

  const [disply , setDisplay] = useState(true)
//   const [disply , setDisplay] = useState(false)

    return(
        <>
        <h1>Toggle Button (ON|OFF)</h1>
        <h1></h1>
        {/* {disply? "Muhammad Jumshaid" : <h1>User not found</h1>} */}
        <button onClick={()=>setDisplay(!disply)}>ON|OFF</button>

        {/* {disply? "Muhammad Jumshaid" : null} */}
        {disply? <MyImage/> : null}

       
        </>
    )
}
export default ToggleButton