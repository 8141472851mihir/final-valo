import React, { useState } from 'react';
import Btn1 from './Btn1';

const Card = (props) => {
    
    return (
        <div className="col-6 col-sm-4 col-md-3 col-lg-3 col-xl-2 mt-2 p-1">
    <div className="card abc rounded-0 bg-transparent m-0 border-secondary h-100">
        <div className='d-flex justify-content-center align-items-center p-3 '>
            <div className='ratio ratio-1x1'>
                <img src={props.imgSrc} className=" rounded-0  " alt="..." />
            </div>
        </div>
        <div className="card-body d-flex justify-content-start align-items-end">
            <h3 className="card-title text-white font_body font_secondary">{props.title}</h3>
            
        </div>
    </div>
</div>

    )
}

export default Card;
