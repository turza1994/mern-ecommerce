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
        <div className={`MenuItem ${size} col-6 col-sm-4 gy-3 gx-5`} >
            <div className='w-100 h-100 overflow-hidden shadow-sm'>
                <div className="background-image rounded d-flex justify-content-center align-items-center shadow-sm" style={{ backgroundImage: `url(${imageUrl})`}}>
                    <div className="content rounded lead p-3 d-flex flex-column justify-content-center align-items-center h-75 w-50">
                        <h1>{title}</h1>
                        <span className="fw-bolder lead">shop now</span>
                    </div> 
                </div> 
            </div>         
        </div>
    );
}

export default MenuItem;