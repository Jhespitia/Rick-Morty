import React from 'react';
import { Link } from 'react-router-dom';
import '../Card/card.css'


const Card = ({results, page}) => {
    
    let display;

    if(results){  
        display=results.map((i) => {
            let {id, name, image, status, origin, species} = i;
            return(           
                <Link 
                    to={`${page}${id}`}
                    key={id} 
                    className="col-4 mb-4 position-relative">
                     <div className="cards">
                     {(() => {
                         if(status === 'Alive'){
                            return(
                                <div className='badgeAlive'>{status}</div>
                                );
                            } else if (status === 'Dead'){
                                return (
                                    <div className='badgeDead'>{status}</div>
                                    );
                                } else {
                                    return (
                                        <div className='badgeUnknown'>{status}</div>
                                        );
                                    }
                                })()}       
                                <div className="name fs-4 fw-bolder mb-2">{name}</div>
                         <img src={image} alt="" className='img img-fluid' />
                         <div className="content">
                             <div className="">
                                 <div className="origin fs-5">Origin</div>
                                 <div className="origin-1 fs-6">{origin.name}</div>
                                 
                                 <div className="origin fs-5">Specie</div>
                                 <div className="origin-1 fs-6">{species}</div>                                 
                             </div>
                         </div>
                     </div>
                </Link>
            ); 
        });

    } else {
        display=' UPSSS!! ❌ Nothing Found ❌ ... Try Again! ';
    }

  return (
    <>
        {display}
    </>
  )
}

export default Card;