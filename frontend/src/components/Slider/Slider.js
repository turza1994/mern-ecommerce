import React from 'react';

const Slider = () => {

    var videoStyle = {
        objectFit: 'cover',
        width: '100vw',
        height: '100vh',
        position: 'absolute',
        top: '0',
        left: '0'
    }

    return (
        <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">

                <div className="carousel-item active">
                    <img src="slider1.png" className="d-block w-100" alt="..." style={{ height: '100vh' }} />
                </div>
                <div className="carousel-item">
                    <img src="slider2.png" className="d-block w-100" alt="..." style={{ height: '100vh' }} />
                </div>
                {/* <div className="carousel-item">
                        <video 
                            className="" 
                            style={videoStyle}
                            poster="//cdn.shopify.com/s/files/1/0130/5041/3114/files/Video_Preview_x1024.png?v=1531915475" 
                            autoPlay
                            muted
                            loop
                        >
                            <source src="https://cdn.shopify.com/s/files/1/0130/5041/3114/files/i_video.mp4?v=1531219306" type="video/mp4"/>
                        </video>
                </div> */}
            </div>
        </div>
    );
};

export default Slider;