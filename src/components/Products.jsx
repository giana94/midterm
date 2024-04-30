import Loading from './Loading.jsx';
import useFetch from '../hooks/useFetch.js';
import Box from './Box.jsx';

const Products = () => {
    const { data, loading, error } = useFetch('/products');

    if (loading) {
        return <Loading />;
    }

    if (error) {
        return <p>An error occurred: {error.message}</p>;
    }

    if (!data || data.length === 0) {
        return <div>No products found</div>;
    }

    return (
        <div>
        <Box data={data} />
    </div>
    );
};

export default Products;

