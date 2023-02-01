import React from 'react';
import Footer from '../component/Footer/Footer';
import HeaderPromotion from '../component/HeaderPromotion/HeaderPromotion';
import PromotionMain from '../component/PromotionMain/PromotionMain';
const PromotionPage = () => {
    return (
        <div>
            <HeaderPromotion/>
            <PromotionMain/>
            <Footer/>
        </div>
    );
};

export default PromotionPage;