import './App.css'
import {Routes, Route} from 'react-router-dom'
//import Auth0providerWithHistory from './auth0-provider-with-history'
import Home from './pages/Home'
import Admin from './pages/Admin'
import LogIn from './pages/LogIn'
import AddItems from './pages/AddItems'
import Cart from './pages/Cart'


const App = () => {

  return (
    <Routes>
      {/* <Auth0ProviderWithHistory> */}
      <Route path='/' element={<Home/>}/>
      <Route path='/admin' element={<Admin/>}/>
      <Route path='/login' element={<LogIn/>}/>
      <Route path='admin/additems' element={<AddItems/>}/>
      <Route path='cart' element={<Cart/>}/>
      {/* </Auth0ProviderWithHistory> */}
    </Routes>
    
  )
}

export default App
