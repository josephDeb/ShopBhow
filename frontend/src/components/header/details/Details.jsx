
import { Link } from 'react-router-dom'
import { useSelector } from "react-redux";
const Details = () => {
  const {currentUser} = useSelector((state) => state.user)
  return (
    <div className="w-[240px] h-full bg-white">
    {/*profile image */}
   

    <div className='h-[60%] w-full flex flex-col justify-center items-center gap-8'>
        <Link to={'/home'}>Shop</Link>
        <h1>Settings</h1>
        {currentUser ? <h1>Sign out</h1>
        : 
        <div className='w-full flex flex-col justify-normal items-center gap-8'>
          <Link to={'/login'}>Login in</Link>
          <h1>Register</h1>
        </div>}
        <h1>About</h1>
        
    </div>
    
</div>
  )
}

export default Details