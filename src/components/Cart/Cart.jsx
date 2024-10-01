import './Cart.css'
import PropTypes from 'prop-types'
const Cart = ({cart,handleReomveFromCart }) => {
    return (
        <div>
              <h2>Cart:{cart.length}</h2>
              <div className="cart-container">
                {
                    cart.map(cart=><div key={cart.id}>
                        <img  src={cart.img}/>
                        <button onClick={()=>handleReomveFromCart(cart.id)}>Remove</button>
                    </div>)
                }
              </div>
        </div>
    );
};

Cart.propTypes = {
    cart:PropTypes.array.isRequired,
    handleReomveFromCart:PropTypes.func.isRequired,
}

export default Cart;