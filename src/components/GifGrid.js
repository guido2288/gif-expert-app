import React from 'react'
import { GifGridItem } from './GifGridItem';
import { useFetchGifs } from '../hooks/useFechGif';


export const GifGrid = ({ category} ) => {

    const { data, loading} = useFetchGifs( category );
    


    return (
        <>
            <h3 className='card animate__animated animate__fadeIn'>{ category }</h3>

            { loading && <p>Loading...</p> }

            <div className='card-grid'>      
                {
                    data.map( img => (
                        <GifGridItem  
                            key= { img.id }
                            {...img}/>
                    ))
                }     
            </div>
        </>
    )
}
