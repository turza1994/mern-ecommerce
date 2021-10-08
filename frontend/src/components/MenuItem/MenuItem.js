import React from 'react';
import { withRouter } from 'react-router-dom';

import './MenuItem.scss'

const MenuItem = ({title, imageUrl, size, history})=>{
    return(
        <div className={`MenuItem ${size}`} onClick={()=>(history.push(`/${title}`))}>

            <div className="background-image" style={{ backgroundImage: `url(${imageUrl})` }} >

            </div>

            <div className="content rounded lead">
                <h1>{title}</h1>
                <span className="fw-bolder">shop now</span>
            </div>
            
        </div>
    );
}

export default withRouter(MenuItem);