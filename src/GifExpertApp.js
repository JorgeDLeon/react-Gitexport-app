import React, { useState } from 'react';
import AddCategory from './components/AddCategory';
import GifGrid from './components/GifGrid';


const GifExpertApp = ()=>{

    const [categorias, setCategorias] = useState(['One Punch']);

    // const handleAdd = ()=> setCategorias( cats => [...cats, 'One Piece'] );
    // O puede ser de esta manera
    // const handleAdd = ()=> setCategorias([...categorias, 'One Piece']);

    return(
        <>
        <h2>GifExpertApp</h2>
        <AddCategory setCategorias={ setCategorias } />
        <hr />

        {/* <button onClick={ handleAdd }>Agregar</button> */}

        <ol>
            {
                categorias.map( categoria => 
                   <GifGrid 
                   key={categoria}
                   categoria={categoria} 
                   />
                )
            }
        </ol>

        </>
    )
}

export default GifExpertApp;