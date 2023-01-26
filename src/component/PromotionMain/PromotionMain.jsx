import React from 'react';
import imgRobot from './img/DominosMainPR.jpg'
import scss from './PromotionMain.module.scss'
const PromotionMain = () => {
    return (
        <div className={scss.main}>
            <div className={scss.item}>
                <div className={scss.item_img}>
                    <img src={imgRobot} alt="promo" />
                </div>
                <div className={scss.item_text}>
                    <div className={scss.item_child}>
                        <div className={scss.item_span}>
                            <span>28-12-2022</span>
                        </div>
                        <div className={scss.item_h1}>
                            <h1>Київстар ТБ та Domino’s. Кіно смакує краще з Domino’s</h1>
                        </div>
                    </div>
                    <div className={scss.item_p}>
                        <p>Сезон подаруночків триває! Оформлюй замовлення від 300 грн та автоматично отримуй доступ на «1 місяць користування Київстар ТБ з пакетом «Преміум HD» у подарунок». Акція діє з 28 грудня 2022 по 31 січня 2023 року включно. Код доступу автоматично друкується у кожному чеку до замовлення від 300 грн.</p>
                    </div>
                    <div className={scss.item_btn}>
                        <button>Деталi</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PromotionMain;