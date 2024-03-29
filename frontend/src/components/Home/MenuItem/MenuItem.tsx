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
        <div className={`MenuItem ${size} col-6 col-sm-4 mb-3`} >
            <div className='w-100 h-100 overflow-hidden shadow-sm rounded border border-2 rounded-3'>
                <div className="background-image rounded d-flex justify-content-center align-items-center shadow-sm" style={{ backgroundImage: `url(${imageUrl})`}}>
                    <div className="content rounded lead p-3 d-flex flex-column justify-content-center align-items-center">
                        <h1>{title}</h1>
                        <span className="fw-bolder lead">shop now</span>
                    </div> 
                </div> 
            </div>         
        </div>
    );
}

export default MenuItem;