import React from "react";
import styles from './Carousel.module.css'
import {Carousel as AntCarousel,Image} from 'antd'

import CarouselImg1 from '../../assets/images/carousel_1.jpg'
import CarouselImg2 from '../../assets/images/carousel_2.jpg'
import CarouselImg3 from '../../assets/images/carousel_3.jpg'

export const Carousel:React.FC = () => {
    return (
        <AntCarousel autoplay className={styles.slider}>
            <Image src={CarouselImg1}/>
            <Image src={CarouselImg2}/>
            <Image src={CarouselImg3}/>
        </AntCarousel>
    )
}