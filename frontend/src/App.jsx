
import {BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Homepage from "./components/header/Homepage"
import ShopContextProvider from "./components/header/context/ShopContextProvider"

import UserLoginForm from "./components/login/UserLoginForm"
import UserRegister from "./components/login/UserRegister"
import Private from "./components/priveRoute/Private"

import PrivateRouteAdmin from "./components/priveRoute/PrivateRouteAdmin"
import Header from "./components/header/Header"
import AdminLogin from "./components/dashboard/adminLogin/adminLogin"
import Dashboard from "./components/dashboard/components/Dashboard"

import HomeP from "./components/shop/HomeP"

import HomeCategories from "./components/dashboard/pages/Categories/HomeCategories"
import AddCategories from "./components/dashboard/pages/Categories/AddCategories"
import UpdateCategory from "./components/dashboard/pages/Categories/UpdateCategory"
import ListCategory from "./components/dashboard/pages/Categories/ListCategory"
import ProductDashboard from "./components/dashboard/pages/Products/ProductDashboard"
import Product from "./components/dashboard/pages/Products/Product"
import AddProducts from "./components/dashboard/pages/Products/AddProducts"
import AdminDashboard from "./components/dashboard/components/AdminDashboard"
import UpdateProduct from "./components/dashboard/pages/Products/UpdateProduct"
import AllProducts from "./components/header/allproducts/AllProducts"
import Footers from "./components/footer/Footer"
import ForgetPassword from "./components/login/ForgetPassword"
import SingleProduct from "./components/header/singleProduct/SingleProduct"


function App() {

  return (
    <>

        <ShopContextProvider>
        <Router>

            <Routes>
              <Route path="/" element={<HomeP />}/>
              <Route path="/login" element={<UserLoginForm />}/>
              <Route path="/signup" element={<UserRegister />}/>
              <Route path="/forget-password" element={<ForgetPassword />}/>
              <Route path="/admin-login" element={<AdminLogin />}/>

              <Route element={<Private />}>

                <Route path="/home" element={<Header />}>
                      <Route path="/home" element={<Homepage />}/>
                      <Route path="/home/all-products" element={<AllProducts />}/>
                      <Route path="/home/:id" element={<SingleProduct />}/>
                </Route>

                <Route element={<PrivateRouteAdmin />}>
                      <Route path="/admin-dashboard" element={<Dashboard />}>
                        <Route path="/admin-dashboard" element={<AdminDashboard />}/>


                         <Route path="/admin-dashboard/products" element={<ProductDashboard />}>

                              <Route path="/admin-dashboard/products" element={<Product />}/>
                              <Route path="/admin-dashboard/products/add" element={<AddProducts />}/>
                              <Route path="/admin-dashboard/products/update/:id" element={<UpdateProduct />}/>
                         </Route>

                        <Route path="/admin-dashboard/categories" element={<HomeCategories />}>
                              <Route path="/admin-dashboard/categories" element={<ListCategory />}/>
                              <Route path="/admin-dashboard/categories/add" element={<AddCategories />}/>
                              <Route path="/admin-dashboard/categories/update/:id" element={<UpdateCategory />}/>
                        </Route>

                      </Route>

                </Route>
              </Route>

            </Routes>
            <Footers />
        </Router>
        </ShopContextProvider>
    </>
  )
}

export default App
