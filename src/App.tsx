import './App.css'
import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import Admin from './pages/Admin'
import LogIn from './pages/LogIn'
import AddItems from './pages/AddItems'
 

const App = () => {

  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/admin' element={<Admin/>}/>
      <Route path='/login' element={<LogIn/>}/>
      <Route path='admin/additems' element={<AddItems/>}/>
    </Routes>
    
  )
}

export default App
