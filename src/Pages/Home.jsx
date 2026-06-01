import React from 'react';
import { Helmet } from 'react-helmet';
import AutoSwiper from '../Components/ui/AutoSwiper';
import Testimonial from '../Components/ui/Testimonial';
import PlantCategories from '../Components/features/PlantCategories';
import BotanistPanel from '../Components/features/Botanist';
import LottieAnimation from '../Components/ui/LottieAnimation';
import WelcomeAnimation from '../Components/ui/WelcomeAnimation';






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