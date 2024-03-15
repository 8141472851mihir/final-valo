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
        <div className="col-12 col-sm-6 col-md-4 col-lg-4 col-xl-3 mt-2 p-1">
            <div className="card abc rounded-0 bg-transparent m-0 border_light" style={{ height: !hasDescription || !hasHref ? 393+'px' : ''}}>
                <div className='ratio ratio-16x9'>
                    <img src={props.imgSrc} className="card-img-to rounded-0" alt="..." />
                </div>
                <div className="card-body">
                    <h3 className="card-title font_primary text-white font_title">{props.title}</h3>
                    {hasDescription && (
                        <p className="card-text m-0 font_secondary text-white font_body_small overflow-hidden" style={{ height: expanded ? 'auto' : 66 + 'px' }}>
                            {props.description}
                        </p>
                    )}
                    {hasDescription && (
                        <span>
                            {!expanded && (
                                <a href="#!" onClick={toggleExpansion} className='font_secondary text-secondary'>
                                    View more
                                </a>
                            )}
                            {expanded && (
                                <a href="#!" onClick={toggleExpansion} className='font_secondary text-secondary'>
                                    View less
                                </a>
                            )}
                        </span>
                    )}
                </div>
                {hasHref && (
                    <div className='card-footer border-top-0'>
                        <Btn1 href={props.href} name="View"/>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Card;
