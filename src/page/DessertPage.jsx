import React from "react"
import desserts from "./../component/Array/Dessert.json"
import Header from "../component/Header/Header"
import DessertCart from "../component/DessertCart/DessertCart"
const DessertPage = () => {
    const des = [desserts]
    return(
        <div>
            <Header/>
            {des.map((arr) =>
                arr.map((item) =>
                <div className='MAIN'>
                <p className='text'>{item.text}</p>
                <div className='cart-f'>
                    {item.desserts.map((i) => <DessertCart {...i} />)}
                </div>
                   </div>
                )
            )}
        </div>
    )
}

export default DessertPage