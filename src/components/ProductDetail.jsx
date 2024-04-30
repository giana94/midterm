import { useParams, useNavigate } from 'react-router-dom';
import Loading from './Loading.jsx';
import useFetch from '../hooks/useFetch.js';

const ProductDetail = () => {
  const { productId } = useParams();
  const navigate = useNavigate();

  const { data, error, loading } = useFetch(`/products/${productId}`);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <p>An error occurred</p>;
  }

  if (!data) {
    return <p>Product not found</p>;
  }

  return (
    <div className='cards-container'>
      <div className="card">
        <h2>{data.title}</h2>
        <img className="detail-img" src={data.image} alt={data.title} />
        <h3>Category: {data.category}</h3>  
        <h3>Description:  {data.description}</h3>
        <h3>Rating: {data.rating.rate}</h3>
        <h3>Price: ${data.price}</h3>
        <button className="btn" onClick={() => navigate(-1)}>
          Go Back
        </button>
      </div>
    </div>
  );
};

export default ProductDetail;