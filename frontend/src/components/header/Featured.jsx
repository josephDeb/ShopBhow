import camera from '../../assets/3.png'

const Featured = () => {
  return (
    <div className="w-full  h-[440px] centered flex-col bg-[#f1f2eb]">
        <div className='w-[90%] h-[400px]  grid grid-cols-3 gap-2'>
            <div className='w-full h-[200px] bg-white flex flex-col shadow-xl'>
                <div className='h-[120px] w-full end '>
                <img src={camera} className='w-[90%] mx-auto '/>
                </div>

                <div className='w-full h-[80px] flex flex-col px-1'>
                    <p className='text-[17px] ht4 '>Canon camera Pro asdsad</p>
                    <h4 className='text-[13px]'>$0000.00</h4>
                </div>
            </div>
            <div className='w-full h-[200px] bg-red-500'>

            </div>
            <div className='w-full h-[200px] bg-red-500'>

            </div>
            <div className='w-full h-[200px] bg-red-500'>

            </div>
            <div className='w-full h-[200px] bg-red-500'>

            </div>
            <div className='w-full h-[200px] bg-red-500'>

            </div>
            
        </div>
    </div>
  )
}

export default Featured