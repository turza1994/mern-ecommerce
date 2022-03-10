import React from 'react';
import './Slider.scss';

const Slider = () => {
    return (
        <div id="carouselExampleSlidesOnly" className="carousel slide Slider" data-bs-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src="slider1.png" className="d-block img-fluid" alt="..." />
                    {/* <p className='display-1 text-danger'>hello world 1</p> */}
                </div>
                <div className="carousel-item">
                    <img src="slider2.png" className="d-block img-fluid" alt="..." />
                    {/* <p>hello world 2</p> */}
                </div>
            </div>
        </div>
    );
};

export default Slider;