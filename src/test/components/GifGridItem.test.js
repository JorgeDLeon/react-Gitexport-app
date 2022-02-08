import React from 'react';
import { shallow } from 'enzyme';
import {GifGridItem} from '../../components/GifGridItem';

describe('Pruebas con <GifExpertApp />', ()=>{

    const title = 'Esto es el titulo';
    const url = 'https://localhost/imagen.png';
    const wrapper = shallow(<GifGridItem title={title} url={url} />);
    
    test('Debe de mostrar los componentes correctamente', ()=>{
        
        expect(wrapper).toMatchSnapshot(); //Esto tomara una fotografia del componente
        
    });

    test('Debe de tener un parrafo con el title', ()=>{

        const p = wrapper.find('p');
        expect(p.text().trim()).toBe(title);

    });


    test('Debe de contener un url y title', ()=>{
        const img = wrapper.find('img');
        // console.log(img.props().src); //Esta es la manera de acceder a las propiedades de la etiqueta img
        //Tambien se pude hacer de esta manera si es solo una propiedad img.prop('src');
         // img.html() De esta manera puedo ver toda la etiqyeta img

         expect( img.prop('src') ).toBe(url);
         expect( img.prop('alt') ).toBe(title);

    });

    test('Debe de tener animate_fadeIn',()=>{

        const div = wrapper.find('div');
        const clase = div.prop('className'); //De esta manera acedemos a la clase del div
        

        expect( clase.includes('animate__fadeIn')).toBe(true); //Podemos hacer una negacion si agregamos not antes del .toBe
    
    });

})