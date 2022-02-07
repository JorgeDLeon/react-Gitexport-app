import React, { useEffect, useState } from 'react';
import { getGifs } from '../helpers/getGifs';
import {GifGridItem} from './GifGridItem';

const GifGrid = ({categoria}) => {

    const [imagen, setImagen] = useState([]);    

    useEffect(()=>{
        getGifs(categoria)
            .then(imgs =>setImagen(imgs))
    },[categoria]) //aL Usar useEffect solo se ejecutara una sola vez el codigo que este dentro de el
    
    

  return (
    <>
        <h3 className='animate__animated animate__slideInDown'>{categoria}</h3>
        <div className='card-grid'>

              {
                imagen.map( img => (
                    <GifGridItem 
                    key={ img.id }
                    {...img} //Si se manda los parametos de esta manera se puden desestructurar en el siguiente componente
                    />
                ))
              }
          
        </div>
    </>
  )
};

export default GifGrid;

