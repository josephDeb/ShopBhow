/* eslint-disable react/prop-types */
import React, { useState } from 'react'
import { BsX, BsXCircle } from 'react-icons/bs'
import axios from 'axios'
import {useParams} from 'react-router-dom'
import Swal from 'sweetalert2'
const UpdateUser = ({setOn, on, }) => {
    const {id} = useParams()
    axios.defaults.withCredentials = true;
    const [values, setValues] = useState({
        username: "",
        email: ""
    })
    const handleUpdate = async (e) => {
        e.preventDefault()
        await axios.put("/api/users/"+id, values)
        .then(res => {
           Swal.fire({
                title: "Good job!",
                text: "You clicked the button!",
                icon: "success"
              })
            setTimeout(() => {
                window.location.reload()
            }, 1000)
              console.log(res)
        })
    }

  return (
    <div className='w-[440px] bg-black/80 h-[52%] '>
        <button onClick={() => setOn(!on)} type='button' className='w-full my-3 mx-4'>
            <BsXCircle />
        </button>
        <h1 className='w-full text-center text-2xl uppercase'>Edit user</h1>
        <form onSubmit={handleUpdate} className='h-[62%] p-8 flex flex-col gap-5'>
                <div className='flex flex-col gap-2'>
                    <h4>Username:</h4>
                    <input type='text' className='w-[71%] text-black pl-2' onChange={(e) => setValues({...values, username: e.target.value})}></input>
                </div>

                <div className='flex flex-col gap-2'>
                    <h4>Email:</h4>
                    <input type='email' className='w-[71%] text-black pl-2' onChange={(e) => setValues({...values, email: e.target.value})}></input>
                </div>

                <button className='mt-8 bg-green-500 px-5 py-2'>
                    Update
                </button>
        </form>
    </div>
  )
}

export default UpdateUser