import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import CartProduct from "../components/CartProduct";
import { setCartProductsThunk } from "../redux/actions";
import { postCheckout } from "../services";

const Cart = () => {
  const dispatch = useDispatch();
  const cartValues = useSelector((state) => state.cart);
  const navigate = useNavigate();

  const [total, setTotal] = useState(0);
  const [confirmCheckout, setConfirmCheckout] = useState(false);

  useEffect(() => {
    dispatch(setCartProductsThunk());
  }, [dispatch]);

  useEffect(() => {
    let amount = 0;
    cartValues.forEach(item => amount += item.product.price * item.quantity);
    setTotal(amount)
  }, [cartValues]);

  useEffect(() => {
    if (confirmCheckout) {
      postCheckout()
        .then(() => {
          setConfirmCheckout(false)
          navigate('/cart/success')
        });
    };
  }, [confirmCheckout, navigate]);

  const list = cartValues.map((item) => {
    return <CartProduct key={item.id} prodObj={item} />;
  });

  return (
    <div>
      <div className="head">
        <h1>Cart</h1>
      </div>
      <div className="cart-content">{list}</div>
      <div className="cart-sub">
        <h3>Total cost: </h3>
        <h4>$ {total}</h4>
      </div>
      <button className="purchase" onClick={() => setConfirmCheckout(true)} >Checkout</button>
      <div className="foot-menu">
        <button><Link to="/shop">Back to Shop</Link></button>
        <button><Link to="/">Back to Home</Link></button>
      </div>
    </div>
  );
};

export default Cart;