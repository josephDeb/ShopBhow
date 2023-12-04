import woman from '../../../../frontend/src/assets/women1.png'
import grocery from '../../../../frontend/src/assets/grocery.png'
import shampoo from '../../../../frontend/src/assets/shampoo.png'
import rowboat from '../../../../frontend/src/assets/rowboat.png'
import tv from '../../../../frontend/src/assets/tv-table.png'
import furnitre from '../../../../frontend/src/assets/furniture.png'
import male from '../../../../frontend/src/assets/male-clothes.png'
import price from '../../../../frontend/src/assets/price-tag.png'

const Category = () => {

   const cardCategory = "h-[120px] centered flex-col text-center bg-white shadow-lg rounded-lg hover:bg-[#c2d4f8]"

  return (
    <div className='xl:grid-cols-8 xl:h-[140px] xl:w-full xl:px-0 xl:gap-6  grid grid-cols-4 w-[90%] mx-auto gap-2 '>
        <div className={`${cardCategory} px-1 hover:scale-105 transition-all duration-200`}>
            <img className='w-[62px]' src={woman}/>
            <p className='text-[12px]'>Women & Fasion</p>
         </div>
         <div className={`${cardCategory} px-1 hover:scale-105 transition-all duration-200`}>
            <img className='w-[62px]' src={grocery}/>
            <p className='text-[12px]'>Grocery & Pets</p>
         </div>
         <div className={`${cardCategory} px-1 hover:scale-105 transition-all duration-200`}>
            <img className='w-[62px]' src={shampoo}/>
            <p className='text-[12px]'>Health & Beauty</p>
         </div>
         <div className={`${cardCategory} px-1 hover:scale-105 transition-all duration-200`}>
            <img className='w-[62px]' src={rowboat}/>
            <p className='text-[12px]'>Sports & Outdoors</p>
         </div>
         <div className={`${cardCategory} px-1 hover:scale-105 transition-all duration-200`}>
            <img className='w-[62px]' src={tv}/>
            <p className='text-[12px]'>Home & Appliances</p>
         </div>
         <div className={`${cardCategory} px-1 hover:scale-105 transition-all duration-200`}>
            <img className='w-[62px]' src={male}/>
            <p className='text-[12px]'>Men & Fasion</p>
         </div>
         <div className={`${cardCategory} px-1 hover:scale-105 transition-all duration-200`}>
            <img className='w-[62px]' src={furnitre}/>
            <p className='text-[12px]'>Home Furniture</p>
         </div>
         <div className={`${cardCategory} px-1 hover:scale-105 transition-all duration-200`}>
            <img className='w-[62px]' src={price}/>
            <p className='text-[12px]'>Exclusive Sale</p>
         </div>
    </div>
  )
}

export default Category