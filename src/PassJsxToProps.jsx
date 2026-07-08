// import React from 'react'

// const PassJsxToProps = ({children}) => {
//   return (
//     <div>
//       <h1>Passing Jsx from Parent to Child</h1>
//       {children}
//     </div>
//   )
// }

// export default PassJsxToProps


import './JsxToProps.css'
import React from 'react'

const PassJsxToProps = ({children, textCol = "green"}) => {
  return (
    <div style={{color : textCol, border : '1px solid ', width : '500px', padding : '10px',  borderRadius: '10ox', margin : '10px auto',}}>
      {/* <h1>Passing Jsx from Parent to Child</h1> */}
      {children}
    </div>
  )
}

export default PassJsxToProps
