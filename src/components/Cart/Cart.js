import React from 'react';
import { removeFromCart } from '../../redux/actions/cartActions';
import { connect } from 'react-redux';

const Cart = (props) => {
    const {cart, removeFromCart} = props;
    return (
        <div>
            <h1>This is Cart</h1>
            <ul>
                {
                    cart.map(pd => <li>{pd.name}
                    <button onClick={()=> removeFromCart(pd.cartId)}
                    >x</button></li>)
                }
            </ul>
        </div>
    );
};

const mapStateToProps = state => {
    return {
        cart: state.cart
    }
}

const mapDispatchToProps = {
    removeFromCart: removeFromCart
}

export default connect(mapStateToProps, mapDispatchToProps) (Cart);