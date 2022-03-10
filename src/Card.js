import React, { useState } from 'react'
import './index.css'

export default function Card(props) {
  const { title, PinCode, MobileNo, Add, Town, district, state,index } = props.data
  const { handleDelete,handleEdit}= props


  
 
  return (
    <div className='Result'>
       
      <div className='style'>{title}</div>
      <div className='style'>{PinCode} </div>
      <div className='style'>{MobileNo}</div>
      <div className='style'>{Add}</div>
      <div className='style'>{Town}</div>
      <div className='style'>{district}</div>
      <div className='style'>{state}</div>
      <button onClick={()=>handleDelete(index)}>Remove</button>
      <button onClick={(e)=>handleEdit(e,index)}>Edit</button>

    </div>
  )
}
