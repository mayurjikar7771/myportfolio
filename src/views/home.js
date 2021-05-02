import React from 'react';
import AppHero from '../components/home/hero';
import AppAbout from '../components/home/about';
import AppFeature from '../components/home/feature';
import Appworks from '../components/home/works';
import AppFaq from '../components/home/faq';
//import AppPricing from '../components/home/pricing';
import AppContact from '../components/home/contact';
const AppHome = () =>{

    return(
         <div className="main">
            <AppHero/>
            <AppFeature/>
            <Appworks/>
            <AppAbout/>
            <AppContact/>
            <AppFaq/>
         </div>
    );

}

export default AppHome;