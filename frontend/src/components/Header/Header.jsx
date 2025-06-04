import React, { useState } from 'react';
import './Header.css';
import { carouselImages } from '../../assets/assets';

const Header = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextImage = () => {
        setCurrentIndex((prev) => (prev === carouselImages.length - 1 ? 0 : prev + 1));
    };

    const prevImage = () => {
        setCurrentIndex((prev) => (prev === 0 ? carouselImages.length - 1 : prev - 1));
    };

    return (
        <div className="carousel">
            <button className="nav-btn" onClick={prevImage}>‹</button>

            <img
                src={carouselImages[currentIndex]}
                alt={`carousel-${currentIndex + 1}`}
                className="carousel-image"
            />

            <button className="nav-btn" onClick={nextImage}>›</button>
        </div>
    );
};

export default Header;
