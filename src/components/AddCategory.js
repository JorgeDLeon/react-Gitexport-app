import React, { useState } from 'react';
import PropTypes from 'prop-types';


function AddCategory({setCategorias}) {

    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e) => {setInputValue(e.target.value)    };


    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log('Handle sumit', inputValue);

        if(inputValue.trim().length > 2){
            setCategorias(cats => [inputValue, ...cats]);
            setInputValue('');
        }
    }

  return (
        <form onSubmit={ handleSubmit } >
            <p>{inputValue}</p>
            <input
                type="text" 
                value = {inputValue}
                onChange={ handleInputChange }
            />
        </form>
        
    )
}

AddCategory.protoType = {
    setCategorias: PropTypes.func.isRequired
}

export default AddCategory;


