import React, { useState } from 'react';
import Btn1 from './Btn1';

const Card = (props) => {
    const [expanded, setExpanded] = useState(false);

    const toggleExpansion = () => {
        setExpanded(!expanded);
    };

    // Check if description is provided
    const hasDescription = props.description && props.description.trim().length > 0;
    // Check if href is provided
    const hasHref = props.href && props.href.trim().length > 0;

    return (
        <div className="col-6 col-sm-4 col-md-2 col-lg-2 col-xl-2 mt-2 p-1">
            <div className="card abc rounded-0 bg-transparent m-0 border_light" style={{ height: !hasDescription || !hasHref ? 350+'px' : ''}}>
                <div className=''>
                    <img src={props.imgSrc} className="card-img-to rounded-0" style={{height:'100%',width:'100%'}} alt="..." />
                </div>
                
            </div>
        </div>
    )
}

export default Card;
