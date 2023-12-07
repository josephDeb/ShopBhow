/* eslint-disable react/prop-types */
import React, { useState } from 'react'
import { BsX, BsXCircle } from 'react-icons/bs'
import axios from 'axios'
import {useParams} from 'react-router-dom'
import Swal from 'sweetalert2'
const AddUser = ({setAddOn, addOn, }) => {

    const [values, setValues] = useState({
        username: "",
        email: "",
        password: ""
    })
    axios.defaults.withCredentials = true;
    const handleAdd = async (e) => {
        e.preventDefault()
        await axios.post("https://shopbhow-backend.onrender.com/api/users/create", values)
        .then(res => {
            alert('Successfully created');
        }).catch(err => console.log(err))
    }

  return (
    <div className='w-[440px] bg-black/80 h-[64%] '>
        <button onClick={() => setAddOn(!addOn)}   type='button' className='w-full my-3 mx-4'>
            <BsXCircle />
        </button>
        <div className='text-center w-full text-2xl uppercase'>
            <h1>Add new user</h1>
        </div>
        <form onSubmit={handleAdd} className='h-[88%] p-8 flex flex-col gap-5'>
                <div className='flex flex-col gap-2'>
                    <h4>Username:</h4>
                    <input type='text' className='w-[71%] text-black pl-2' onChange={(e) => setValues({...values, username: e.target.value})}></input>
                </div>

                <div className='flex flex-col gap-2'>
                    <h4>Email:</h4>
                    <input type='email' className='w-[71%] text-black pl-2' onChange={(e) => setValues({...values, email: e.target.value})}></input>
                </div>

                <div className='flex flex-col gap-2'>
                    <h4>Password:</h4>
                    <input type='password' className='w-[71%] text-black pl-2' onChange={(e) => setValues({...values, password: e.target.value})}></input>
                </div>

                <button className='mt-8 bg-green-500 px-5 py-2'>
                    Submit
                </button>
        </form>
    </div>
  )
}

export default AddUser