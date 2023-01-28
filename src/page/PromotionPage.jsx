import React from 'react';
import HeaderPromotion from '../component/HeaderPromotion/HeaderPromotion';
import PromotionMain from '../component/PromotionMain/PromotionMain';

import scss from './Pages.module.scss'
const PromotionPage = () => {
    return (
        <div>
            <HeaderPromotion/>
            <PromotionMain/>
        </div>
    );
};

export default PromotionPage;