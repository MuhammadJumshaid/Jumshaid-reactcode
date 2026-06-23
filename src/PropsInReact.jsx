// function PropsInReact({myName}){
//     return(
//         <>
//         <h1>Props In React</h1>
//         {myName}
//         </>
//     )
// }
// export default PropsInReact;


// function PropsInReact(props){
//     return(
//         <>
//         <h1>Props In React</h1>
//         {props.myName}
//         </>
//     )
// }
// export default PropsInReact;

function PropsInReact({myName, age, mail,addrs}){
    console.log(myName) // {myName: 'Jumshaid'}
    return(
        <>
        <h1>Props In React</h1>
       <h2>Name : {myName}</h2> 
       <h2>Age : {age}</h2> 
       <h2>Mail : {mail}</h2>
       <h2>address : {addrs}</h2>
        </>
    )
}
export default PropsInReact;