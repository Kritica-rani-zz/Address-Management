import React from 'react'

export default function EditList(props) {
    const{handleEdit}= props
  return (
<button onClick={handleEdit}>Delete</button>
       
  )
}
