import './App.css'
import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import Admin from './pages/Admin'
import LogIn from './pages/LogIn'
 

const App = () => {

  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/admin' element={<Admin/>}/>
      <Route path='login' element={<LogIn/>}/>
    </Routes>
    
  )
}

export default App
