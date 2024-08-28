import React from 'react'
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';


const Cart = () => {
  const dispatch = useDispatch();
  const items = useSelector(state => state.cart.items);
  return (
    <div>
      <div className="cart">
        <div className="cart__top">
          <h2 className="content__title">Cart</h2>
          <div className="cart__clear">
            {/* <% include ../../public/img/trash.svg %> */}
            <span>Clear Cart</span>
          </div>
        </div>
        <div className="content__items">
          {/* <% include components/cart-item.ejs %> <% include components/cart-item.ejs %> <% */}
          {/* include components/cart-item.ejs %> <% include components/cart-item.ejs %> */}
        </div>
        <div className="cart__bottom">
          <div className="cart__bottom-details">
            <span> Total pizzas <b>3 pcs</b> </span>
            <span> Order price: <b>90 $</b> </span>
          </div>
          <div className="cart__bottom-buttons">
            <Link to="/" className="button button--outline button--add go-back-btn">
              {/* <% include ../../public/img/grey-arrow-left.svg %> */}
              <span>Go Back</span>
            </Link>
            <div className="button pay-btn">
              <span>Checkout</span>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Cart




