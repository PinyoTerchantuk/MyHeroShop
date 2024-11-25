import React from 'react';
import { Link, useParams } from 'react-router-dom';

const Detail1 = {
    1: {
        name: 'Bakugo',
        description: 'High-quality camera with excellent features.',
        price: '$99',
        stock: '75',
        specs: {
            display: '3 inches',
            resolution: '1080 x 2400 pixels',
            processor: 'Snapdragon 888',
            ram: '8GB',
            storage: '128GB',
            battery: '4500mAh',
        },
        reviews: [
            { name: 'John Doe', comment: 'Great product! Highly recommend.' },
            { name: 'Jane Smith', comment: 'Amazing value for the price!' },
        ],
        image: 'https://inwfile.com/s-o/38vwu9.jpg',
    },
    2: {
        name: 'Another Product',
        description: 'Another high-quality product.',
        price: '$120',
        stock: '30',
        specs: {
            display: '4 inches',
            resolution: '1440 x 3200 pixels',
            processor: 'Snapdragon 890',
            ram: '12GB',
            storage: '256GB',
            battery: '5000mAh',
        },
        reviews: [],
        image: 'https://inwfile.com/s-o/ijugwp.jpg',
    },
};

function DetailPage() {
    const { id } = useParams<{ id: string }>();
    const product = Detail1[parseInt(id || '1')];

    if (!product) return <h1>Product Not Found</h1>;

    return (
        <div style={{ padding: '20px' }}>
            <h1>{product.name}</h1>
            <div style={{ display: 'flex', gap: '20px' }}>
                <img
                    src={product.image}
                    alt={product.name}
                    style={{ width: '300px', borderRadius: '8px' }}
                />
                <div>
                    <h2>{product.description}</h2>
                    <p><strong>Price:</strong> {product.price}</p>
                    <p><strong>Stock:</strong> {product.stock}</p>
                    <h3>Specifications</h3>
                    <ul>
                        {Object.entries(product.specs).map(([key, value]) => (
                            <li key={key}>
                                <strong>{key}:</strong> {value}
                            </li>
                        ))}
                    </ul>
                    <Link to={`/form/${id}`}>
                        <button
                            style={{
                                padding: '10px',
                                backgroundColor: '#007bff',
                                color: '#fff',
                                border: 'none',
                                borderRadius: '4px',
                            }}
                        >
                            Add to Cart
                        </button>
                    </Link>
                </div>
            </div>
            <h3>Reviews</h3>
            <div>
                {product.reviews.length > 0 ? (
                    product.reviews.map((review, index) => (
                        <div key={index}>
                            <strong>{review.name}</strong>
                            <p>{review.comment}</p>
                        </div>
                    ))
                ) : (
                    <p>No reviews yet.</p>
                )}
            </div>
        </div>
    );
}

export default DetailPage;
