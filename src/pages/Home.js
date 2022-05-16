import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";

const Home = () => {

  return (
    <div>
      <div className="head">
        <h1>Jewerly Home</h1>
        <button className="cart"><Link to="/cart"><FaShoppingCart /></Link></button>
      </div>
      <div className="menu">
        <button><Link to="/shop">Shop</Link></button>
        <button><Link to="/about">About</Link></button>
        <button><Link to="/contact">Contact</Link></button></div>
    </div>
  );
};

export default Home;