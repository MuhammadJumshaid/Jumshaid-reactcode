const JsCode=() => {

// const fullName = "Muhammad Jumshaid";
// const fullName = "";
// const fullName =null
const fullName =undefined
let myName = "Muhammad Jumshaid";
let age = 25
let x = 20 ;
let y = 30 ;
function city(){
    alert("Lahore")
}

let myImg= "https://images.unsplash.com/photo-1780833546253-7216b5f3986e?q=80&w=2075&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"

const empData = {
    empName : "Jumshaid", 
    empAge : 28,
    empGender : "Mail",
    empEmail : "jimi.1222@gmail.com"
}

function calc(a,b, op){
    // return(a+b)
    if(op=="+"){
        return a+b
    }
    else if (op=="-"){
        return a-b
    }
    else if(op == "*")
        return a*b
    else if (op == "%"){
        return a%b
    }
}


const myColorArr = ["red", "blue", "yellow", "black"]
    return(
        <div>
        <h1>Javascript code in jsx</h1>
        {/* <h2>My name is {fullName} and my age is {age}</h2> */}
        <h2>{fullName?fullName : "user is inValied"}</h2>
        {/* <h2>{x+y}</h2> */}
        {/* {city()} */}

        {/* {calc(5,7,"+")} */}
        {/* {calc(5,7,"-")} */}
        {/* {calc(5,7,"%")} */}
        {calc(5,7,"*")}

    <h2>       {empData.empName} </h2>  
    <h2>{myColorArr[0]}</h2>

    <input type="text" value={myName}/>
    <h2>
    <input type="text" value={empData.empEmail}/>
    </h2>
    <img src={myImg} width={200} />
        </div>  
    )
}
export default JsCode


