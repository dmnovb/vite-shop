import './App.css'
 
import Header from './components/Header'
import ItemsData from './components/ItemsData'
import Carousel from './components/Carousel'
 
const App = () => {

  return (
    <div>
      <Header/>
      <div className = "image-container">
        <Carousel/>
      </div>
      <ItemsData/>
    </div>
    
  )
}

export default App
