/* eslint-disable no-undef */
import { useState,} from "react";
import { useNavigate } from "react-router";

import './style.css'
import {  signInSuccess} from "../../../../user/userSlice";
import { useDispatch, useSelector } from "react-redux";



const ForgetPassword = () => {

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
        e.preventDefault()
        
        if(!values.email ||  !values.password) {
            setIrror("Please fill out the fields")
        }
        setError(true)
        const res = await fetch("/api/users/auth", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(values)
        });
        try {
            setError(false)
            const data = await res.json()
            dispatch(signInSuccess(data))
            if(data.Status) {
                if(currentUser) {
                    setError(false)
                    navigate("/home")
                }
            } else {
                setError(false)
                setIrror(data.Error)
            }
        } catch (err) {
            console.log(err)
            setError(false)
        }
    }



  return (
    <div className="relative flex flex-col justify-center max-w-screen-xl mx-auto min-h-screen overflow-hidden manjari">
            <div className="w-[88%] p-6 m-auto bg-white/80 rounded-md shadow-xl lg:max-w-sm">
                <h1 className="text-3xl font-semibold text-center text-red-700 uppercase">
                    Sign in
                </h1>
                <form onSubmit={handleSubmit} className="mt-6">
                    <div className="mb-2">
                        <label
                            htmlFor="email"
                            className="block text-sm font-semibold text-gray-800"
                        >
                            Enter your Email or Phone number
                        </label>
                        <input
                            onChange={(e) => setValues({...values, email: e.target.value})}
                            type="email"
                            className="block w-full px-4 py-2 mt-2 text-black bg-white border rounded-md focus:border-red-700 focus:ring-red-800 focus:outline-none focus:ring focus:ring-opacity-40"
                        />
                    </div>
                    <p className="text-red-600 ">{irror && irror}</p>
     
                    <div className="mt-2">
                        <button type='submit' className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-red-700 rounded-md hover:bg-red-600 focus:outline-none focus:bg-red-500">
                        {error ? <div className="lds-hourglass font-semibold">Loading</div> : <p>Find</p>}
                        </button>
                    </div>
                </form>
               
                <p className="mt-8 text-xs font-light text-center text-gray-700">
                    {" "}
                    Don't have an account?{" "}
                    <a
                        onClick={() => navigate("/signup")}
                        className="font-medium text-red-700 hover:underline"
                    >

                        Sign up
                    </a>
                </p>
            </div>
        </div>
  )
}

export default ForgetPassword