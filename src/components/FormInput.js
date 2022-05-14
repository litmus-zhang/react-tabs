import React from 'react'
import './formInput.css'

export default function FormInput({label, type, placeholder, name}) {
  return (
      <div className='FormInput'>
          <label>{ label}</label>
          <input type={type} placeholder={placeholder} name={ name}/>
    </div>
  )
}
