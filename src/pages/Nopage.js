import { Link } from "react-router-dom";
import { FaHome } from 'react-icons/fa';

const NoPage = () => {
  return (
    <div>
      <h1>404</h1>
      <h2>Not Found</h2>
      <img src="https://http.cat/404" alt="" style={{ maxWidth: "400px" }} />
      <h3>Sorry, but the page that you're looking for doesn't available</h3>
      <button><Link to="/"><FaHome /> Back to Home</Link></button>
    </div>
  );
};

export default NoPage;