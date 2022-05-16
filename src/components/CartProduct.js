import { useEffect, useState } from "react";
import { FaTrashAlt } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { deleteCartProductThunk } from "../redux/actions";

const CartProduct = ({ prodObj }) => {

  const dispatch = useDispatch();
  const [deleteId, setDeleteId] = useState(null);

  useEffect(() => {
    if (deleteId) {
      dispatch(deleteCartProductThunk(deleteId));
    }
  }, [dispatch, deleteId]);

  return (
    <div className="cart-item">
      <h2>{prodObj.product.name}</h2>
      <p>Quantity: {prodObj.quantity} </p>
      <h4>Total: $ {prodObj.product.price * prodObj.quantity}</h4>
      <button onClick={() => setDeleteId(prodObj.id)} ><FaTrashAlt /></button>
    </div>
  );
};

export default CartProduct;