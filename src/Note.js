import React from 'react'


const Note = (props) => {
  return (<>
  <div style={{
    // display: 'flex',
    marginTop:20,
    // 
    backgroundColor:'lightblue'

    
  }}
  
   className='note'>
    <h3 style={{
      display: 'flex',
      flexwrap: 'wrap',
      marginLeft:60
      }} >
        {props.head}
    </h3>

    <p style={{
      display: 'flex',
      flexwrap: 'wrap',
      marginLeft:60
    }}>
      {props.area}
    </p>

    </div>
    </>
  )
}

export default Note