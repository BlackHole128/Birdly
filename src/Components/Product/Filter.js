import React from 'react'

function Filter(props) 
{

  const {family , filterProduct} = props
  return (
    <div >
      
    <button className="btn btn-outline mx-0.5" onClick={() => filterProduct(family)}>{family}</button>
    </div>
  )
}

export default Filter