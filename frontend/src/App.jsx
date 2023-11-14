import Header from "./components/Header/Header"
import {BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Homepage from "./components/header/Homepage"
import ShopContextProvider from "./components/header/context/ShopContextProvider"
import Footer from "./components/footer/Footer"
import UserLoginForm from "./components/login/UserLoginForm"


function App() {

  return (
    <><ShopContextProvider>
      <Router>
        <Header />
          <Routes>
            <Route path="/" element={<Homepage />}/>
            <Route path="/login" element={<UserLoginForm />}/>
          </Routes>
       
      </Router>
      </ShopContextProvider>
    </>
  )
}

export default App
