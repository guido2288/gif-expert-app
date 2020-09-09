import React, { useState } from 'react';
import { AddCategories } from './components/AddCategories';
import { GifGrid} from './components/GifGrid'
//rafc tab para crearlo automatico
const GifExpertApp = ( { defaultCategories = [] } ) => {

    //const categories = ['One Punch', 'Samurai X', 'Dragon Ball'];
    const [categories, setCategories] = useState( defaultCategories );

    /*const handleAdd =() => {
        setCategories( [...categories, 'HunterXHunter'] );
    }*/



    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategories setCategories={setCategories}/>
            <hr/>



            <ol>
                {
                    categories.map( category =>( 
                        <GifGrid 
                            key = { category }
                            category={category } 
                        />
                    ))
                }
            </ol>
        </>
    )


}

export default GifExpertApp;