import React from 'react';
import MenuItems from '../../components/MenuItems/MenuItems';
import Slider from '../../components/Slider/Slider';
// import "~slick-carousel/slick/slick.css"; 
// import "~slick-carousel/slick/slick-theme.css";
// import Slider from "react-slick";

const HomePage = () => {

    return (
        <div>
            <Slider />
            <MenuItems />
        </div>
    );
};

export default HomePage;