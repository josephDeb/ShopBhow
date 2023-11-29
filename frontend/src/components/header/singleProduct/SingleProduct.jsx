import { useEffect } from "react";
import { Link } from "react-router-dom";
import arrow from '../../../assets/arrow-right.gif'
const SingleProduct = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, [SingleProduct]);

  return (
    <div className='max-w-screen-lg h-screen mx-auto'>
        <div className="h-full xl:grid xl:grid-cols-2 flex flex-col justify-start">
            <div className="w-full h-[71px] flex flex-col justify-end items-start pl-6">
            <Link to={'/home'} className='flex items-center w-[220px] h-[44px] mt-4 gap-2'>
                <img src={arrow} className='a rotate-180 w-8'/>
                 <h1>Back to homepage</h1>
            </Link>
            </div>
        </div>
    </div>
  )
}

export default SingleProduct