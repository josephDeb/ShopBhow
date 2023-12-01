import { useContext } from "react";
import './zigzag.css'

import { ShopContext } from "../context/ShopContextProvider";

import ProductSingle from "./ProductSingle";
import Testimonials from "./Testimonials";
import SuggestCategory from "./SuggestCategory";
import FooterBar from "../../../pages/FooterBar";

import AddTestimonial from "./AddTestimonial";
const SingleProduct = () => {

      const {products,  } = useContext(ShopContext)

  return (
    <div className='max-w-screen-lg mx-auto manjari'>
        <div className=" flex flex-col justify-start xl:justify-center">
            <div className="xl:w-full w-[90%] mx-auto h-[620px] xl:h-[350px] border-2 my-8 bg-white shadow-xl rounded-xl">
               <ProductSingle products={products}/>
            </div>

            <div className=" gap-2 xl:gap-4 xl:w-full w-[90%] mx-auto h-[140px] xl:h-[170px] border-2 xl:my-0 mb-8 bg-white rounded-xl px-4 xl:px-8 xl:flex xl:flex-col xl:justify-center centered flex-col shadow-xl">
              <h1 className="mx-auto xl:text-2xl text-xl text-center">Suggest Category</h1>
              <SuggestCategory />
            </div>

            <div className="xl:w-full w-[90%] mx-auto h-[440px] mb-8 xl:h-[530px] xl:my-8 bg-white rounded-xl centered flex-col">
               <Testimonials />
            </div>

            <div className="h-[300px] xl:w-full  w-[90%] mx-auto rounded-xl flex justify-center items-end bg-white">
              <AddTestimonial />
            </div>

            <div className="w-full h-[111px]">
            </div>

           <div className="w-full fixed bottom-0 z-[55] h-[62px] xl:hidden">
             <FooterBar />
           </div>
        </div>
    </div>
  )
}

export default SingleProduct