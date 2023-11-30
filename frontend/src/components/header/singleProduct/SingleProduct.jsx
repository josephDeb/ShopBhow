import { useContext, useEffect } from "react";
import './zigzag.css'

import { ShopContext } from "../context/ShopContextProvider";
import ArrowBack from "./ArrowBack";
import ProductSingle from "./ProductSingle";
import Testimonials from "./Testimonials";
import FilterCategory from "../allproducts/FilterCategory";
import SuggestCategory from "./SuggestCategory";
import FooterBar from "../../../pages/FooterBar";
import Ratings from "./Ratings";
import AddTestimonial from "./AddTestimonial";
const SingleProduct = () => {

      const {category, products, search, values, filterItems, } = useContext(ShopContext)

  return (
    <div className='max-w-screen-lg mx-auto bg-white manjari'>
        <div className=" flex flex-col justify-start xl:justify-center">
            <div className="w-full h-[620px] xl:h-[350px]">
               <ProductSingle products={products}/>
            </div>

            <div className="gap-8 w-[90%] mx-auto h-[140px] ">
              <h1 className="mx-auto text-xl">Suggest Category</h1>
              <SuggestCategory />
            </div>

            <div className="w-full h-[350px]">
               <Testimonials />
            </div>

            <div className="h-[300px] w-full flex justify-center items-end ">
              <AddTestimonial />
            </div>

            <div className="w-full h-[111px]">
            </div>

           <div className="w-full fixed bottom-0 z-[55] h-[62px]">
             <FooterBar />
           </div>
        </div>
    </div>
  )
}

export default SingleProduct