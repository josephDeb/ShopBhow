
import { Link } from 'react-router-dom'

const Details = () => {

  return (
    <div className="w-[240px] h-full bg-white">
    {/*profile image */}
   

    <div className='h-[60%] w-full flex flex-col justify-center items-center gap-8'>
        <Link to={'/'}>Shop</Link>
        <h1>Settings</h1>
        <Link to={'/login'}>Login in</Link>
        <h1>Register account</h1>
        <h1>About</h1>
    </div>
    
</div>
  )
}

export default Details