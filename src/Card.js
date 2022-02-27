import React from 'react'
import './index.css'
export default function Card(props) {
    const{title,PinCode,MobileNo,Add,Town,district,state}= props.data
    console.log(props,MobileNo,"mob")
  return (
    <div className='Result'>
        <div className='style'>{title}</div>
        <div className='style'>{PinCode} </div>
           <div className='style'>{MobileNo}</div> 
           <div className='style'>{Add}</div>
           <div className='style'>{Town}</div>
           <div className='style'>{district}</div>
           <div className='style'>{state}</div>
       
    </div>
  )
}
