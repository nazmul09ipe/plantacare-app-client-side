import React from 'react';
import { Helmet } from 'react-helmet';
import AutoSwiper from './AutoSwiper';
import Testimonial from './Testimonial';
import PlantCategories from './PlantCategories';
import { BotanistPanel } from './Botanist';
import LottieAnimation from './LottieAnimation';
import WelcomeAnimation from './WelcomeAnimation';






const Home = () => {
    return (
        <div>
            <Helmet>
        <title>Home | PlantaCare</title>
      </Helmet>


            <div className='bg-white dark:bg-gray-900 text-white'>

              <WelcomeAnimation></WelcomeAnimation>
              <LottieAnimation></LottieAnimation>
              
                <AutoSwiper></AutoSwiper>
               <PlantCategories></PlantCategories>
               <BotanistPanel></BotanistPanel>
                <Testimonial></Testimonial>


            </div>








      
        </div>



    );
};

export default Home;