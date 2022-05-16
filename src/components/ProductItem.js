import { Link } from "react-router-dom";

const ProductItem = ({ prodObj }) => {
  return (
    <div className="product-card">
      <Link to={`/shop/${prodObj.id}`}>
        <h4>{prodObj.name}</h4>
        <img src={prodObj.images[0]?.url} alt="" width={"150px"} />
        <p>$ {prodObj.price}</p>
      </Link >
    </div>
  );
};

export default ProductItem;