import React from 'react';
import './ProductDisplay.css';
import { product } from '../../assets/assets';

const productDetails = [
    { title: 'Bestselling kurtas', price: '₹499' },
    { title: 'Tokyo Talkies Bag', price: '₹499' },
    { title: "Women's Sports Shoes", price: '₹499' },
    { title: 'Radhe Crockery Set', price: '₹499' },


];

const ProductDisplay = () => {
    return (
        <div className="product-section">
            {product.map((img, index) => (
                <div className="product-card" key={index}>
                    <img src={img} alt={`product-${index}`} className="product-img" />
                    <p className="product-title">{productDetails[index].title}</p>
                    <p className="product-price">Under <strong>{productDetails[index].price}</strong></p>
                </div>
            ))}
        </div>
    );
};

export default ProductDisplay;
