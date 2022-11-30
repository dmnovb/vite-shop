import * as React from "react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { wrap } from "popmotion";
import images from './Images'

const Carousel = () => {    
        return(
      <div>
        <motion.div className='carousel'>
            <motion.div className='inner-carousel'>
                {images.map(image => {
                    return (
                        <motion.div className='h-full mt-10 w-screen ml-28 overflow-hidden'>
                            <img src={image}/>
                        </motion.div>
                    )
                })}
            </motion.div>
        </motion.div>
      </div>
  )
};

export default Carousel;