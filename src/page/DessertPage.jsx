import Dessert from "../Dessert.json"

const DessertPage = () => {
    const deserts = [Dessert]
    return(
        <div>
            {deserts.map((arr) =>
            arr.map((item) =>
                <div className="main">
                    <div className="card">
                        <img src={item.img} alt="dessert"/> {item.g}  g
                        <p>{item.title}</p>
                        <button className="btnS">standart</button>
                        <div>
                        {item.price} 
                        <button>To Cart</button>
                        </div>
                    </div>
                </div>
            )
            )}
        </div>  
    );
};

export default DessertPage;
