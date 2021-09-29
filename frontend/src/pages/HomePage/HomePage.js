import React from 'react';
// import "~slick-carousel/slick/slick.css"; 
// import "~slick-carousel/slick/slick-theme.css";
// import Slider from "react-slick";

const HomePage = () => {
    // var settings = {
    //     dots: true
    // };

    return (
        <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
                {/* <div className="carousel-item active">
                        <video 
                            className="" 
                            style={{ height: '100vh', display: 'block', width: '100vw' }}
                            preload=""
                            data-poster="//cdn.shopify.com/s/files/1/0130/5041/3114/files/Video_Preview_x1024.png?v=1531915475" 
                            data-setup="{}"
                        >
                            <source src="//cdn.shopify.com/s/files/1/0130/5041/3114/files/i_video.mp4?v=1531219306" />
                        </video>
                </div> */}
                <div className="carousel-item active">
                    <img src="slider1.png" className="d-block w-100" alt="..." style={{ height: '100vh' }} />
                </div>
                <div className="carousel-item">
                    <img src="slider2.png" className="d-block w-100" alt="..." style={{ height: '100vh' }} />
                </div>
                <div className="carousel-item">
                    <video width="750" height="500" controls >
                        <source src="//cdn.shopify.com/s/files/1/0130/5041/3114/files/i_video.mp4?v=1531219306" type="video/mp4"/>
                    </video>
                </div>
                {/* <div class="carousel-item">
                    <video className="" preload="" data-poster="//cdn.shopify.com/s/files/1/0130/5041/3114/files/Video_Preview_x1024.png?v=1531915475" >
                        <source src="//cdn.shopify.com/s/files/1/0130/5041/3114/files/i_video.mp4?v=1531219306">
                    </video>
                </div> */}
            </div>
        </div>
    );
};

export default HomePage;