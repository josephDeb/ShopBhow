/* eslint-disable no-undef */
import { useState,} from "react";
import { useNavigate } from "react-router";

import './style.css'
import { signInSuccess } from "../../../redux/user/userSlice";
import { useDispatch, useSelector } from "react-redux";

import img from '../../../assets/stickyNote.png'
import axios from 'axios'
const AdminLogin = () => {

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const {currentUser} = useSelector(state => state.user)
   
    const [values, setValues] = useState({
      email: "",
      password: "",
    });

    const [error, setError] = useState(false)
    const [irror, setIrror] = useState("")

    const handleSubmit = async (e) => {
        axios.defaults.withCredentials = true;
        e.preventDefault()
        if(!values.email ||  !values.password) {
            alert("PLease fill up all fields")
        }
        const res = await fetch("/api/users/auth", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(values)
        });
        setError(true)
        try {
            const data = await res.json()
            setError(false)
            dispatch(signInSuccess(data))
            if(currentUser.isAdmin) {
                navigate("/admin-dashboard")
            } else {
                alert('Not authorized admin');
                navigate("/admin-login")
            }
        } catch (err) {
            console.log(err)
        }
    }





  return (
    <div className="relative flex flex-col justify-center max-w-screen-xl mx-auto min-h-screen overflow-hidden">
              <img src={img} className="absolute top-0 xl:w-[350px] w-[170px]"/>
            <div className="w-[88%] p-6 m-auto bg-white/50 rounded-md shadow-xl lg:max-w-sm">
                <h1 className="text-3xl font-semibold text-center text-red-700 uppercase">
                    Sign in as Admin
                </h1>
                <form onSubmit={handleSubmit} className="mt-6">
                    <div className="mb-2">
                        <label
                            htmlFor="email"
                            className="block text-sm font-semibold text-gray-800"
                        >
                            Email
                        </label>
                        <input
                            onChange={(e) => setValues({...values, email: e.target.value})}
                            type="email"
                            className="block w-full px-4 py-2 mt-2 text-black bg-white border rounded-md focus:border-red-700 focus:ring-red-800 focus:outline-none focus:ring focus:ring-opacity-40"
                        />
                    </div>
                    <div className="mb-2">
                        <label
                            htmlFor="password"
                            className="block text-sm font-semibold text-gray-800"
                        >
                            Password
                        </label>
                        <input
                            minLength={6}
                            onChange={(e) => setValues({...values, password: e.target.value})}
                            type="password"
                            className="block w-full px-4 py-2 mt-2 text-black bg-white border rounded-md focus:border-red-700 focus:ring-red-800 focus:outline-none focus:ring focus:ring-opacity-40"
                        />
                    </div>
                    <a
                        onClick={() => navigate("/login/forget_password")}
                        className="text-[15px] text-red-700 hover:underline"
                    >
                        Forget Password?
                    </a>

                    <p className="text-red-600 ">{irror && irror}</p>
     
                    <div className="mt-2">
                        <button type='submit' className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-red-700 rounded-md hover:bg-red-600 focus:outline-none focus:bg-red-500">
                        {error ? <div className="lds-hourglass font-semibold">Loading</div> : <p>Submit</p>}
                        </button>
                    </div>
                </form>

            </div>
        </div>
  )
}

export default AdminLogin