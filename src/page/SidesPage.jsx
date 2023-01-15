import React from 'react';
import boxes from './../sidesBoxes.json'
import sides from './../sides.json'
import bread from './../sidesBread.json'
import chicken from './../sidesChicken.json'
import sauses from './../sidesSauses.json'
import SidesCart from '../Components/SidesCart/SidesCart';
const SidesPage = () => {
    const category = [boxes, sides, chicken, bread, sauses]
    return (
        <div>
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
    );
};

export default SidesPage;