import Header from "./components/Header/Header"
import {BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Homepage from "./components/header/Homepage"
import ShopContextProvider from "./components/header/context/ShopContextProvider"
import Footer from "./components/footer/Footer"
import UserLoginForm from "./components/login/UserLoginForm"
import UserRegister from "./components/login/userRegister"
import Private from "./components/priveRoute/private"

function App() {

  return (
    <>

      <ShopContextProvider>
        <Router>
          <Header />
            <Routes>
              <Route path="/login" element={<UserLoginForm />}/>
              <Route path="/signup" element={<UserRegister />}/>
              <Route element={<Private />}>
                  <Route path="/home" element={<Homepage />}/>
              </Route>
            </Routes>
        </Router>
        </ShopContextProvider>

    </>
  )
}

export default App
