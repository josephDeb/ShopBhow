
import {BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Homepage from "./components/header/Homepage"
import ShopContextProvider from "./components/header/context/ShopContextProvider"

import UserLoginForm from "./components/login/UserLoginForm"
import UserRegister from "./components/login/UserRegister"
import Private from "./components/priveRoute/private"
import Home from "./components/shop/Home"
import PrivateRouteAdmin from "./components/priveRoute/PrivateRouteAdmin"
import Header from "./components/header/Header"
import AdminLogin from "./components/dashboard/adminLogin/adminLogin"
import AdminDashboard from "./components/dashboard/AdminDashboard"

function App() {

  return (
    <>

      <ShopContextProvider>
        <Router>
          
            <Routes>
              <Route path="/" element={<Home />}/>
              <Route path="/login" element={<UserLoginForm />}/>
              <Route path="/signup" element={<UserRegister />}/>
              <Route path="/admin-login" element={<AdminLogin />}/>
              <Route element={<Private />}>

                <Route path="/home" element={<Header />}>
                      <Route path="/home" element={<Homepage />}/>

                      <Route element={<PrivateRouteAdmin />}>
                            <Route path="/home/admin-dashboard" element={<AdminDashboard />}/>
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
