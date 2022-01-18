import React from 'react';

const Slider = () => {
    return (
        <div id="carouselExampleSlidesOnly" className="carousel slide pt-4" data-bs-ride="carousel">
            <div className="carousel-inner">

                <div className="carousel-item active">
                    <img src="slider1.png" className="d-block w-100" alt="..." style={{ height: '100vh' }} />
                </div>
                <div className="carousel-item">
                    <img src="slider2.png" className="d-block w-100" alt="..." style={{ height: '100vh' }} />
                </div>
            </div>
        </div>
    );
};

export default Slider;