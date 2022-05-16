import { useEffect, useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { setInfoProductThunk, setProductThunk } from "../redux/actions";
import { addProductToCart } from "../services";
import ProductItem from '../components/ProductItem';

const Product = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const product = useSelector((state) => state.productInfo);
  const filterProducts = useSelector(state => state.products);

  const [quantity, setQuantity] = useState(0);
  const [confirm, setConfirm] = useState(false);

  useEffect(() => {
    dispatch(setInfoProductThunk(id));
  }, [dispatch, id]);

  useEffect(() => {
    if (quantity && confirm) {
      addProductToCart({
        product: id,
        quantity: quantity
      })
        .then((res) => {
          setConfirm(false)
        })
    }
  }, [quantity, confirm, id]);

  useEffect(() => {
    if (product.category) {
      dispatch(setProductThunk(product.category.id))
    }
  }, [dispatch, product])

  const decrement = () => {
    setConfirm(false)
    if (quantity > 0) {
      setQuantity(quantity - 1)
    }
  }
  const increment = () => {
    setConfirm(false)
    setQuantity(quantity + 1)
  };

  const productImages = product.images?.map((item) => <img src={item.url} width='150px' alt='' key={item.id} />);

  return (
    <div>
      <div className="head">
        <h1>{product.name}</h1>
        <button className="cart"><Link to="/cart"><FaShoppingCart /></Link></button>
      </div>
      <div className="product-cont">
        <div>{productImages}</div>
        <p>{product.description}</p>
        <h3>$ {product.price}</h3>
      </div>
      <div className="buy-content">
        <div className="buy-quantity">
          <button onClick={decrement}>-</button>
          <p>{quantity}</p>
          <button onClick={increment} >+</button>
        </div>
        <button className="purchase" onClick={() => setConfirm(true)} ><FaShoppingCart /> Add To Cart</button>
      </div>
      <h2>Related Products</h2>
      <div className="product-list">
        {filterProducts.map(product => (<ProductItem key={product.id} prodObj={product} />
        ))}
      </div>
      <div className="foot-menu">
        <button><Link to="/shop">Back to Shop</Link></button>
        <button><Link to="/">Back to Home</Link></button>
      </div>
    </div >
  )
};

export default Product;