import React from 'react';
import boxes from './../component/Array/sidesBoxes.json'
import sides from './../component/Array/sides.json'
import bread from './../component/Array/sidesBread.json'
import chicken from './../component/Array/sidesChicken.json'
import sauses from './../component/Array/sidesSauses.json'
import Header from '../component/Header/Header';
import SidesCart from '../component/SidesCart/SidesCart';
import scss from './Pages.module.scss'
import Footer from '../component/Footer/Footer';
const SidesPage = () => {
    const category = [boxes, sides, chicken, bread, sauses]
    return (
        <div>
            <Header />
            <div className={scss.content}>
                {category.map((arr) =>
                    arr.map((item) =>
                        <div className={scss.main_grid}>
                            <p className={scss.text}>{item.text}</p>
                            <div className={scss.cart_f}>
                                {item.sides.map((i) => <SidesCart {...i} key={i.id} />)}
                            </div>
                        </div>
                    ))}
            </div>
            <Footer/>
        </div>
    );
};

export default SidesPage;