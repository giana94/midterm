import React from 'react';
import { Link } from 'react-router-dom';
import '../box.css'; 

const Box = ({ data, size = 'large', round }) => {
    const sizes = {
        small: "box-small",
        medium: "box-medium",
        large: "box-large"
    };

    const roundedCorners = round ? "rounded" : "";
    const boxStyle = `box ${sizes[size]} ${roundedCorners}`;

    return (
        <div className={boxStyle}>
            {data.map(product => (
                <div key={product.id} className="card-main">
                    <img className="main-img" src={product.image} alt={product.title} />
                    <div className="card-content">
                        <Link to={`/products/${product.id}`}><h2>{product.title}</h2></Link>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Box;
