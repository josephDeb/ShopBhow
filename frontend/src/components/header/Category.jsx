import woman from '../../../../frontend/src/assets/woman.png'
import grocery from '../../../../frontend/src/assets/grocery.png'
import shampoo from '../../../../frontend/src/assets/shampoo.png'
import rowboat from '../../../../frontend/src/assets/rowboat.png'
import tv from '../../../../frontend/src/assets/tv-table.png'
import beach from '../../../../frontend/src/assets/beach.png'
import baby from '../../../../frontend/src/assets/baby-products.png'
import price from '../../../../frontend/src/assets/price-tag.png'

const Category = () => {
  return (
    <div className='xl:grid-cols-8 xl:h-[170px] xl:w-full xl:px-4 xl:gap-6  grid grid-cols-4 w-[383px] mx-auto gap-2 bg-[#e9eeff]'>
            <div className='h-[120px] centered flex-col text-center bg-white shadow-lg rounded-lg hover:bg-[#c2d4f8]'>
                <img className='w-[62px]' src={woman}/>
                <p className='text-[12px]'>Women & Fasion</p>
            </div>
            <div className='border-2 h-[120px] centered flex-col text-center bg-white shadow-lg rounded-lg hover:bg-[#c2d4f8]'>
                <img className='w-[62px]' src={grocery}/>
                <p className='text-[12px]'>Women & Fasion</p>
            </div>
            <div className='border-2 h-[120px] centered flex-col text-center bg-white shadow-lg rounded-lg hover:bg-[#c2d4f8]'>
                <img className='w-[62px]' src={shampoo}/>
                <p className='text-[12px]'>Women & Fasion</p>
            </div>
            <div className='border-2 h-[120px] centered flex-col text-center bg-white shadow-lg rounded-lg hover:bg-[#c2d4f8]'>
                <img className='w-[62px]' src={rowboat}/>
                <p className='text-[12px]'>Women & Fasion</p>
            </div>
            <div className='border-2 h-[120px] centered flex-col text-center bg-white shadow-lg rounded-lg hover:bg-[#c2d4f8]'>
                <img className='w-[62px]' src={tv}/>
                <p className='text-[12px]'>Women & Fasion</p>
            </div>
            <div className='border-2 h-[120px] centered flex-col text-center bg-white shadow-lg rounded-lg hover:bg-[#c2d4f8]'>
                <img className='w-[62px]' src={beach}/>
                <p className='text-[12px]'>Women & Fasion</p>
            </div>
            <div className='border-2 h-[120px] centered flex-col text-center bg-white shadow-lg rounded-lg hover:bg-[#c2d4f8]'>
                <img className='w-[62px]' src={baby}/>
                <p className='text-[12px]'>Women & Fasion</p>
            </div>
            <div className='border-2 h-[120px] centered flex-col text-center bg-white shadow-lg rounded-lg hover:bg-[#c2d4f8]'>
                <img className='w-[62px]' src={price}/>
                <p className='text-[12px]'>Women & Fasion</p>
            </div>
        </div>
  )
}

export default Category