
import React, { useState } from 'react'


const Roles = ["Frontend","Backend"]

const ManualFrom = () => {

    const [values,SetValues] = useState({
        name:"",
        email:"",
        password:"",
    })

    const [errors,SetErrors] = useState({})

    const [submited,SetSubmited] = useState({})


    const set = (field)=>{
        return (e) => SetValues((v)=>({
            ...v,[field]:e.target.value
        }))
    }

    const validate = (e)=>{
        const error = {}

        if(!e.name.trim()) e.name = "Name is required"

        if(!e.email.trim()) e.email= "Email  is required"
        if(!e.password.trim()) e.password = "Password is required"
       
        
        return e
    }

    const submit= (e)=>{
        e.preventDefault()
        const e = validate(values)
        SetErrors(e)
        if(Objects.keys(e).length === 0){
            SetSubmited(true)
        }
        if(submited){
            return (
                <div>
                    <h1>Form submitted successfully</h1>
                </div>
            )
        }
    }

  return (
    <div>
        <form onSubmit={submit} noValidate>
            <label>Name</label>
            <input value ={values.name} onChange={set('name')} />
                <label>Email</label>
            <input value ={values.email} onChange={set('email')} />
                <label>Name</label>
            <input value ={values.password} onChange={set('password')} />
        </form>
    </div>
  )
}

export default ManualFrom