import React, { useEffect, useState } from 'react'
import './index.css'
import Card from './Card'
import Form from './Form'
//  state={ContactDetails:
// {
//     Name:"",
// MobileNo:""
// }
// Address:
//     {
//         PinCode:""
//         City:""

//     }
//}


export default function Address() {
    const [name, setName] = useState("")
    const [mob, setMob] = useState("")
    const [pin, setPin] = useState("")
    const [add, setAdd] = useState("")
    const [Town, setTown] = useState("")
    const [district, setDistrict] = useState("")
    const [state, setState] = useState("")
    const [Edit,isEdit] =useState(false)
    const [data, setdata] = useState(()=>{
     
        const Localdata=localStorage.getItem('data');
        const InitialValue = JSON.parse(Localdata)
        return [...InitialValue||[]];  
    })
    const handleName = (e) => {
        e.preventDefault()
        setName(e.target.value)
    }
    const handleMob = (e) => {
        
        e.preventDefault()
        setMob(e.target.value)

    }
    const handlePin = (e) => {
        setPin(e.target.value)
    }
    const handleAdd = (e) => {
        setAdd(e.target.value)
    }
    const handleDistrict = (e) => {
        setDistrict(e.target.value)
    }
    const handleLocality = (e) => {
        setTown(e.target.value)
    }
    const handleState = (e) => {
        setState(e.target.value)
    }
    const handleClick = (e) => {
        e.preventDefault()
        const item = {
            title: name,
            MobileNo: mob,
            index: Math.random(),
            PinCode: pin,
            Add: add,
            Town: Town,
            district: district,
            state: state,
          
        }
        
        const updatedItem = [...data, item]
        setdata(updatedItem)
        setName("")
        setAdd("")
        setMob("")
        setDistrict("")
        setPin("")
        setTown("")
        setState("")
    }
    const handleDelete = (index) => {
        console.log("index",index)
         let NewData = data.filter((item) => item.index !== index)
         setdata(NewData)
      
        console.log("newdata",NewData)
     
      }
      const handleEdit = (e,index) => {
e.preventDefault()

const item= data.find((item)=>item.index==index)
isEdit(item)
    }
    const handleSave=(e,list,index)=>{
        e.preventDefault()
        console.log(data,"data")
const updatedData = data.map((item)=>{
    if(item.index==index){
      return {
          ...item,
          ...list
      };
    }
    return item
     
    })
    setdata(updatedData)
    isEdit(false)
    }
    useEffect(()=>{
        localStorage.setItem("data", JSON.stringify(data))
    },[data])
    console.log("edit",Edit)
    return (
<div className='Main'>
       {Edit ?( <Form info={Edit}
               handleSave={handleSave}/>):( 
               <form className='form'>
                   <h3>Contact details</h3>
                   <div className='input-box'> <input type="text" placeholder="Name*" required value={name} onChange={handleName} /></div>
   
                   <div className='input-box'> <input type="digit" placeholder="Mobile No*" required value={mob} onChange={handleMob} /></div>
                   <h3>Address</h3>
   
                   <div className='input-box'> <input type="number" placeholder="Pin Code*" required value={pin} onChange={(e) => handlePin(e)} /></div>
                   <div className='input-box'>   <input type="text" placeholder="Address(House No,Building,Street,Area*)" required value={add} onChange={(e) => handleAdd(e)} /></div>
                   <div className='input-box'>  <input type="text" placeholder="Locality/Town*" required value={Town} onChange={(e) => handleLocality(e)} /></div>
                   <div className='input-box'> <input type="text" placeholder="City/District*" required value={district} onChange={(e) => handleDistrict(e)} /></div>
                   <div className='input-box'>  <input type="text" placeholder="State*" required value={state} onChange={(e) => handleState(e)} /></div>
                   <div className='input-box'> <button type="submit" id ="btn"onClick={handleClick}> ADD ADDRESS</button>  </div>
               </form>)}
               
       
            <div style={{display:'flex',flexWrap:"wrap"}}>
            {data.map((item, index) => {
                return (
                   
                    <Card data ={item}
                    handleDelete={handleDelete}
                    handleEdit={handleEdit}/>
                    
                    
                )
              
            })}
               
            </div>
        
        </div>
        
    )
}
