
import { useState } from 'react'
export default function Form(props) {
    const { title, PinCode, MobileNo, Add, index } = props.info
    const{handleSave}= props

    const [name, setName] = useState(title)
    const [mob, setMob] = useState(MobileNo)
    const [pin, setPin] = useState(PinCode)
    const [add, setAdd] = useState(Add)
    const [district, setDistrict] = useState(props.info.district)
    const [Town,setTown]= useState(props.info.Town)
    const [state, setState] = useState(props.info.state)
   
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
    return (
        <div className='Main'>
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
<div><button type= "submit" onClick={(e)=>handleSave(e,{title:name,MobileNo:mob,Add:add,Town:Town,state:state,PinCode:pin},index)}>Save</button></div>
            </form>
        </div>
    )
}