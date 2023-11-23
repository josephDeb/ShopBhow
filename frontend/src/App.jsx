
import {BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Homepage from "./components/header/Homepage"
import ShopContextProvider from "./components/header/context/ShopContextProvider"

import UserLoginForm from "./components/login/UserLoginForm"
import UserRegister from "./components/login/UserRegister"
import Private from "./components/priveRoute/private"

import PrivateRouteAdmin from "./components/priveRoute/PrivateRouteAdmin"
import Header from "./components/header/Header"
import AdminLogin from "./components/dashboard/adminLogin/adminLogin"
import Dashboard from "./components/dashboard/components/Dashboard"
import CategoriesD from "./components/dashboard/pages/CategoriesD"
import HomeD from "./components/dashboard/components/HomeD"
import HomeP from "./components/shop/HomeP"


function App() {

  return (
    <>

      <ShopContextProvider>
        <Router>

            <Routes>
              <Route path="/" element={<HomeP />}/>
              <Route path="/login" element={<UserLoginForm />}/>
              <Route path="/signup" element={<UserRegister />}/>
              <Route path="/admin-login" element={<AdminLogin />}/>
              <Route element={<Private />}>

                <Route path="/home" element={<Header />}>
                      <Route path="/home" element={<Homepage />}/>
                </Route>

                <Route element={<PrivateRouteAdmin />}>
                      <Route path="/admin-dashboard" element={<Dashboard />}>
                         <Route path="/admin-dashboard" element={<HomeD />}/>
                          <Route path="/admin-dashboard/categories" element={<CategoriesD />}/>
                      </Route>

                </Route>
              </Route>

            </Routes>
        </Router>
        </ShopContextProvider>

    </>
  )
}

export default App
