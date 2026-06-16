// function StateInReact(){

import { useState } from "react";

//     let city = "Karachi";
//     function changeCity(){
//         city = "Lahore"
//         alert(city = "Lahore")
//         console.log(city= "Lahore")
//     }
//     return(
//         <>
//         <h1>State in React</h1>
//         {city}
//         <button onClick={changeCity}>Change city</button>
//         </>
//     )
// }
// export default 


// now with useState

function StateInReact(){


   const [city, setCity] = useState("Karachi")
    // function changeCity(){
    //    setCity("Lahore")
    // }
    return(
        <>
        <h1>State in React</h1>
        {city}
        <button onClick={()=>setCity("Islamabad")}>Change city</button>
        </>
    )
}
export default StateInReact