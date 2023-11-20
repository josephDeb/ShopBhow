
import { useEffect, useState } from 'react'
import HomePage from './HomePage.jsx'
import CircleLoader	 from "react-spinners/CircleLoader";

const Home = () => {

  const [loading, setLoading] = useState(false)
  
  useEffect(() =>{ 
      setLoading(true)
      setTimeout(() => {
        setLoading(false)
      }, 3000)
  }, [])

  return (
    <>
      {loading ? 
      <div className="flex justify-center items-center h-screen flex-col bg-[#F1F2eb]">
      <CircleLoader	
        loading={loading}
        color={"#ed1d24"}
        size={80}
        aria-label="HashLoader	"
        data-testid="loader"
      />
      <h1 className="text-black text-xl mt-8 ">Loading</h1>
     </div>
    : 
    <div className="w-full h-screen ">
       <div className='w-full'>
        <HomePage />
        </div>

    </div>

    }
    </>
    
  )
}
export default Home