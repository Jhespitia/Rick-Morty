import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import './cardModal.css'

const CardModal = () => {
    
    let {id} = useParams()
    let [fetchedData, setFetchedData] = useState([]);
    let {name, image, location, gender, origin, species, status, type, episode} =fetchedData

    let api = `https://rickandmortyapi.com/api/character/${id}`;
    
useEffect(() => {
    (async function () {
    let data = await fetch(api).then((res) => res.json());
    setFetchedData(data);
    console.log(data.results);       
    })();
}, [api]);


  return (
    <div className='card2 container d-flex justify-content-center'>
        <div className="d-flex flex-column gap-3">
            <h1 className="name2 text-center p-3">{name}</h1>
            <img src={image} alt="" className='imgcard img-fliud' />
                {(() => {
                         if(status === 'Alive'){
                            return(
                            <div className='badgeAlive2'>{status}</div>
                                );
                            } else if (status === 'Dead'){
                            return (
                            <div className='badgeDead2'>{status}</div>
                                    );
                            } else {
                            return (
                            <div className='badgeUnknown2'>{status}</div>
                            );
                        }
                })()}
                <div className="conntent">
                    <div className=" origin fs-5">Gender: 
                        <span className="origin-1 fs-6"> {gender}</span>
                    </div>

                    <div className="origin fs-5">Specie: 
                        <span className="origin-1 fs-6"> {species}</span>
                    </div>

                    <div className=" origin fs-5">Number of Episodes: 
                        <span className="origin-1 fs-6"> {episode?.length}</span>
                    </div>

                    <div className=" origin fs-5">Type: 
                        <span className="origin-1 fs-6"> {type === ''? 'Unknown' : type}</span>
                    </div>

                    <div className="origin fs-5">Origin: 
                        <span className="origin-1 fs-6"> {origin?.name}</span>
                    </div>

                    <div className=" origin fs-5">Last Location: 
                        <span className="origin-1 fs-6"> {location?.name}</span>
                    </div>

                </div>
                
         </div>
    </div>
  )
}

export default CardModal;