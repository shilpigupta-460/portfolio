import React from 'react'

function Heading({message}) {
  return (
    < div className="heading">
     <h1 style={ { margin: '3rem 1rem' } }> {message}</h1>
    </div>
  )
}

export default Heading