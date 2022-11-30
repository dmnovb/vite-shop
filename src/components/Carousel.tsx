import {motion} from 'framer-motion'
import 'react-awesome-slider/dist/styles.css';

const Carousel = () => {
  return(
      <div>
        <motion.h1 animate={{x: 50}}>Hello</motion.h1>
      </div>
  )
};

export default Carousel;