import './App.css'
import {Routes, Route} from 'react-router-dom'
//import Auth0providerWithHistory from './auth0-provider-with-history'
import Home from './pages/Home'
import Admin from './pages/Admin'
import LogIn from './pages/LogIn'
import AddItems from './pages/AddItems'
import ShoppingCart from './pages/ShoppingCart'


const App = () => {

  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/admin' element={<Admin/>}/>
        <Route path='/login' element={<LogIn/>}/>
        <Route path='admin/additems' element={<AddItems/>}/>
        <Route path='cart' element={<ShoppingCart/>}/>
      </Routes>
    </div>
    
  )
}

export default App
