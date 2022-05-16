import { useEffect, useState } from "react";
import { FaSearch, FaShoppingCart } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import ProductItem from "../components/ProductItem";
import { setCategoriesThunk, setProductThunk, setSearchCategoriesThunk } from "../redux/actions";

const Shop = () => {

  const dispatch = useDispatch();
  const productArr = useSelector(state => state.products);
  const categoriesArr = useSelector(state => state.categories);
  const [searchCategory, setSearchCategory] = useState('');

  const [currentCategory, setCurrentCategory] = useState('');

  useEffect(() => {
    dispatch(setProductThunk(currentCategory));
    dispatch(setCategoriesThunk());
  }, [dispatch, currentCategory]);

  const searchProduct = (e) => {
    e.preventDefault();
    dispatch(setSearchCategoriesThunk(searchCategory))
  }

  const list = productArr.map((item) => <ProductItem key={item.id} prodObj={item} />);
  const categoriesList = categoriesArr.map(item => <button key={item.id} onClick={() => setCurrentCategory(item.id)} >{item.name}</button>);

  return (
    <div>
      <div className="head">
        <h1>Jewerly Shop</h1>
        <button className="cart"><Link to="/cart"><FaShoppingCart /></Link></button>
      </div>
      <div className="menu">
        <button onClick={() => setCurrentCategory('')} >
          All Products
        </button>
        {categoriesList}
      </div>
      <form className="search-box" onSubmit={searchProduct}>
        <input type="search" placeholder="Search Product" value={searchCategory} onChange={e => setSearchCategory(e.target.value)} />
        <button><FaSearch /></button>
      </form>
      <div className="product-list">{list}</div>
      <div className="foot-menu">
        <button><Link to="/">Back to Home</Link></button>
      </div>
    </div>
  )
};

export default Shop;