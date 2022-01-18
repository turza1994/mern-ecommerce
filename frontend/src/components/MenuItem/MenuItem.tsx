import React from 'react';
import './MenuItem.scss'

interface IProps{
    key: string | number,
    title: string,
    imageUrl: string,
    size?: string
}

const MenuItem = ({title, imageUrl, size}: IProps)=>{
    return(
        <div className={`MenuItem ${size}`} >
            <div className="background-image" style={{ backgroundImage: `url(${imageUrl})` }} >

            </div>

            <div className="content rounded lead">
                <h1>{title}</h1>
                <span className="fw-bolder lead">shop now</span>
            </div>           
        </div>
    );
}

export default MenuItem;