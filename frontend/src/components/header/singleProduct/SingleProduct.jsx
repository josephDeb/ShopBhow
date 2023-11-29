import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";

import { ShopContext } from "../context/ShopContextProvider";
import ArrowBack from "./ArrowBack";
import ProductSingle from "./ProductSingle";
const SingleProduct = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, [SingleProduct]);

    const {products} = useContext(ShopContext)

  return (
    <div className='max-w-screen-lg h-screen mx-auto'>
        <div className="h-full xl:grid xl:grid-cols-2 flex flex-col justify-start">
            <div className="w-full">
               <ArrowBack />
            </div>

            <div>
               <ProductSingle products={products}/>
            </div>
        </div>
    </div>
  )
}

export default SingleProduct