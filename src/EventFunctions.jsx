function EventFunctions(){

function jsFunCall(){
    alert("javascript function call")
}
function reactFunCall(){
    alert("Function called with react")
}

function city(cityName){
alert(cityName)
}

    return(
        <>
            <h2>Events Call in react</h2>
            <button style={{width : '100px'}}  onClick={reactFunCall}>Click Me</button>
            <br/>
            
            <button style={{width : '100px'}}  onClick={()=>city("Islamabad")}>Islamabad</button>
            <br/>
            <button style={{width : '100px'}}  onClick={()=>city("Lahore")}>Lahore</button>
            <br/>

            <button style={{width : '100px'}}  onClick={()=>city("Pishawar")}>Pishawar</button>
            {/* {jsFunCall()} */}
        </>
    )
}

export default EventFunctions