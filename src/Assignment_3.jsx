import { useState } from "react"

function Assignment_3() {


    // function increaseCount(){
    //     if(number>5){
    //     setNumber("Out of range")
    //     }
    //     else(setNumber(number+1))
    // }
    const [number, setNumber] = useState(0);
    return (
        <>
            <h1>Digits to Apphabets</h1>
            <h1 style={{margin : '20px',padding : '20px'}}>{number}</h1>
            <div >
                <button onClick={()=>setNumber(number+1)} style={{margin : '20px',padding : '20px'}}>Plus</button>
                <button onClick={()=>setNumber(number-1)} style={{margin : '20px',padding : '20px'}}>Minus</button>
                <button onClick={()=>setNumber(0)} style={{margin : '20px',padding : '20px'}}>Reset</button>
            </div>
            <h3 style={{marginLeft : '20px',padding : '20px'}}>range(0-5)</h3>
            <div style={{marginLeft : '20px',padding : '20px'}} >
            {
                number==0 ?   <h1>Zere </h1>
                : number==1 ? <h1>One</h1>
                 : number==2 ? <h1>Two</h1>
                 : number==3 ? <h1>Three  </h1>
                : number==4 ? <h1>Four </h1>
                : number==5 ? <h1>Five </h1>
                :  <h1>Out of range</h1>
            }
                </div>

        </>

    )
}
export default Assignment_3