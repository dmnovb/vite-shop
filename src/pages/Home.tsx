import Header from '../components/Header'
import ItemsData from '../components/ItemsData'
import Carousel from '../components/Carousel'
import Cart from './ShoppingCart'

const Home = () => {
    return (
    <div> 
        <Header/>
        <Carousel/>
        <ItemsData/>
    </div>
    )
}

export default Home;