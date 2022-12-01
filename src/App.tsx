import './App.css'
import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import Admin from './pages/Admin'
 

const App = () => {

  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/admin' element={<Admin/>}/>
    </Routes>
    
  )
}

export default App
