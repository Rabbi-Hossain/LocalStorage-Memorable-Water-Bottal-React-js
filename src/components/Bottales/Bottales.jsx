import { useEffect } from "react";
import { useState } from "react";
import Bottale from "../Bottale/Bottale";
import './Bottales.css'
import { addToLS, getStoredCart, removeFromLS } from "../../utilites/localstorage";
import Cart from "../Cart/Cart";

const Bottales = () => {
    const [bottales, setBottales] = useState([])
    const [cart, setCart] = useState([])


    useEffect(() => {
        fetch('bottales.json')
            .then(res => res.json())
            .then(data => setBottales(data))
    }, [])

    useEffect(() => {
        console.log('bottles length useeffect', bottales.length)
        if (bottales.length) {
            const storedCard = getStoredCart()
            console.log(storedCard,bottales)

            const saveCart = []
            for(const id of storedCard){
                console.log(id)
                const bottle = bottales.find(bottle=>bottle.id == id)
                if(bottle){
                    saveCart.push(bottle)
                }
            }
            setCart(saveCart)
        }
    }, [bottales])

    const cartHandler = bottale => {
        const newCart = [...cart, bottale]
        setCart(newCart)
        addToLS(bottale.id)
    }

    const handleReomveFromCart = id=>{
        const remainingCart = cart.filter(bottle=>bottle.id !==id)
        setCart(remainingCart)
        removeFromLS(id)
    }

    return (
        <div>
            <h2>Bottales Availables: {bottales.length}</h2>
            <Cart cart ={cart} handleReomveFromCart={handleReomveFromCart }></Cart>
            <div className="bottales-container">
                {
                    bottales.map(bottal => <Bottale
                        key={bottal.id}
                        cartHandler={cartHandler}
                        bottal={bottal}></Bottale>)
                }
            </div>
        </div>
    );
};

export default Bottales;