import React from 'react';
import boxes from './../component/Array/sidesBoxes.json'
import sides from './../component/Array/sides.json'
import bread from './../component/Array/sidesBread.json'
import chicken from './../component/Array/sidesChicken.json'
import sauses from './../component/Array/sidesSauses.json'
import Header from '../component/Header/Header';
import SidesCart from '../component/SidesCart/SidesCart';
const SidesPage = () => {
    const category = [boxes, sides, chicken, bread, sauses]
    return (
        <div>
            <Header />
            <div className="content">
                {category.map((arr) =>
                    arr.map((item) =>
                        <div className='MAIN'>
                            <p className='text'>{item.text}</p>
                            <div className='cart-f'>
                                {item.sides.map((i) => <SidesCart {...i} />)}
                            </div>
                        </div>
                    ))}
            </div>
        </div>
    );
};

export default SidesPage;