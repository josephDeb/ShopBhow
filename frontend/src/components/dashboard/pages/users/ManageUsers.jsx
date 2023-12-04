
import { useEffect, useState } from 'react'
import AdminMenu from '../../AdminMenu'

import axios from 'axios'
import './grid.css'
import { FaEdit } from 'react-icons/fa'
import { MdDelete } from 'react-icons/md'
import UpdateUser from './UpdateUser'
import {Link, useParams} from 'react-router-dom'
import Swal from 'sweetalert2'
const ManageUsers = () => {
    const {id} = useParams()
    const [allUsers, setAllUsers] = useState([])
    useEffect(() => {
        axios.get("/api/users")
        .then(res => {
            setAllUsers(res.data)
            console.log(allUsers)
        }).catch(err => console.log(err))
    }, [])

    const [on, setOn] = useState(false)


    const handleDelete = async (id) => {
        const result = await Swal.fire({
            title: "Do you really want to delete?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#ed1d24",
            confirmButtonText: "Yes, delete it!",
          })
          if(result.isConfirmed) {
            await axios.delete("/api/users/"+id)
        .then(res => {
            console.log(res)
            window.location.reload()
        }).catch(err => console.log(err))
          }
         
    }
  
  return (
    <>
    <AdminMenu />
    <div className='w-full p-8 border-2 manjari text-white'>
        <div className='grid2 h-full'>
            <div className='border-2 p-6 flex flex-col'>
                <div className='w-full'>
                   <button className='bg-orange-500 px-12 py-2 text-white '>Add user
                  </button>
                </div>

                <div className='flex gap-[200px] w-full mt-8 text-white border-b'>
                    <p>User ID</p>
                    <h1>Email</h1>
                    <h1>Username</h1>
                </div>
                
                {allUsers.map((usr, i) => {
                    return <div key={i} className='flex w-full mt-2'>
                    <p className=' w-[260px]'>{usr._id}</p>
                    <h1 className=' w-[247px]'>{usr.email}</h1>
                    <h1 className='w-[170px] '>{usr.username}</h1>

                    <div className='flex gap-3'>
                      <Link to={'/admin-dashboard/users/'+usr._id} onClick={() => setOn(!on)}  className='bg-green-500 px-3'>
                        <FaEdit />
                      </Link>

                      <button onClick={() => handleDelete(usr._id)} className='bg-red-500 px-3'>
                        <MdDelete />
                      </button>
                    </div>
             </div>
                })}
            </div>

            <div className=''></div>
            </div>
        </div>

        {on ? <div className='h-full fixed left-[35%] top-[20%]'>
             <UpdateUser setOn={setOn} on={on} id={id}/>
        </div> : <></>}
    </div>
    </>
  )
}

export default ManageUsers