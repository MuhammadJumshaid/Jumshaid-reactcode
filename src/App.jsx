
import './App.css'
// import Assignment_3 from './Assignment_3'
import PropsInReact from './PropsInReact'
// import Assignment2 from './Assignment2'
// import ToggleButton from './ToggleButton'
// import Assignment1 from './Assignment1.jsx'
// import EventFunctions from './EventFunctions.jsx'
// import JsCode from './JsCode.jsx'
// import StateInReact from './StateInReact.jsx'
// import WildLife from './WildLife'
// import CompFun, { flower, Provinces } from './CompFun'

function App() {
 let myName = "Muhammad Jumshaid"

  return (
    <>
   <h1 style={{color : 'chocolate' }}>Learn react (with) Muhammad Jumshaid</h1>
   {/* <CompFun/> */}
   {/* <Provinces/> */}
   {/* {flower} */}
   {/* <WildLife/> */}
   {/* <JsCode/> */}
   {/* <EventFunctions/> */}
{/* <StateInReact/> */}
{/* <Assignment1/> */}
{/* <Assignment2/> */}
{/* <ToggleButton/> */}
{/* <Assignment_3/> */}
{/* <PropsInReact myName="Jumshaid"/> */}
<PropsInReact myName={myName} age ={25} mail="jimikhan.1222@gmail.com" addrs= {"Mohalla Sherani wala"}/>

   </>
  )
}

export default App
