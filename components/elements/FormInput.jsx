import React from 'react'

export default function FormInput({ name, placeholder, type, value, onChange, onBlur, className, helperMsg }) {
  return (
    <input 
        type={type || "text"} 
        name={name} 
        id={name} 
        placeholder={placeholder} 
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        className={`border-2 border-primary-200 rounded-xl p-3 bg-gray-50 focus-within:outline-none ${className}`}                
    /> 
  )
}
