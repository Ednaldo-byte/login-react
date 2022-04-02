import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/home/home'
import CreateAccount from './pages/login/creatAccount'
import ForgotPassword from './pages/login/forgotPassword'
import Login from './pages/login/login'

export default function AppRoutes(){


  return(
    <>
    <Router>
      <Routes>
        <Route path='/' element={<Login />}/>
        <Route path='/createaccount' element={<CreateAccount />}/>
        <Route path='/forgotpassword' element={<ForgotPassword />}/>
        <Route path='/home' element={<Home />}/>
      </Routes>
    </Router>
  </>
  )
}