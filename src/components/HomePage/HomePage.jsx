import React, {useState} from 'react'
// import Cart from '../Cart/Cart'
// import pizza from '../../pizza.json'
import Header from '../Header/Header'
export default function HomePage() {
  const [clicked, isClicked] = useState(false)
  return (
    <div>
      <Header clicked={clicked} isClicked={isClicked} />
      {/* <div className="cart-f">
        {pizza.map((item) => <Cart key={item.id} {...item} />)}
      </div> */}
    </div>

  )
}
