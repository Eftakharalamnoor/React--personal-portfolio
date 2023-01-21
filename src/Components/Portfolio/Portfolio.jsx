import React from 'react'
import './Portfolio.css';
import {Swiper, SwiperSlide} from 'swiper/react';
import Sidebar from '../../img/sidebar.png';
import Ecommererce from '../../img/ecommerce.png';
import HOC from '../../img/hoc.png';
import MusicApp from '../../img/musicapp.png';
import 'swiper/css';
import { themeContext } from '../../Context';
import { useContext } from 'react';

const Portfolio = () => {

    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
  return (
    <div className="portfolio">
        {/* Heading */}
        <span style={{color: darkMode ? 'white' : ''}}>Recent Project</span>
        <span>Portfoilo</span>

        {/* slider */}
        <Swiper
    spaceBetween={30}
    slidesPerView={3}
    grabCursor={true}
    className='portfolio-slider'

        >
            <SwiperSlide>
                <img src={Sidebar} />
            </SwiperSlide>
            <SwiperSlide>
                <img src={Ecommererce} />
            </SwiperSlide>
            <SwiperSlide>
                <img src={HOC} />
            </SwiperSlide>
            <SwiperSlide>
                <img src={MusicApp} />
            </SwiperSlide>
        </Swiper>
    </div>
  )
}

export default Portfolio;