import { useEffect } from 'react';
import {useSelector} from 'react-redux';
import {Outlet, Navigate} from 'react-router-dom'
import Swal from 'sweetalert2'
const Private = () => {

    const {currentUser} = useSelector(state => state.user)
    useEffect(() => {
      if(currentUser === null) {
        setTimeout(() => {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "You are not authorized!",
            footer: '<a className"text-blue-500" href="http://localhost:5173/signup">Dont have an account?</a>'
          });
        }, 1500)
      }
    }, [currentUser])
  return currentUser ? <Outlet/> : <Navigate to={'/login'}/>

}

export default Private