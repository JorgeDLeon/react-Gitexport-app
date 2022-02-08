import React from 'react'; //Como se esta utilizando jsx se tiene que usar react
import '@testing-library/jest-dom'; // para obtner las ayudas de auto completado de jest
import { shallow } from 'enzyme'; //Enzyme sirve para poder utilizar el shallow
import AddCategory from '../../components/AddCategory';


describe('Pruebas en en <AddCategory', ()=>{

    const setCategorias = jest.fn(); //Al colocar esto se hace una funcion 
    let wrapper;

    beforeEach(()=>{

        jest.clearAllMocks(); //Hace que si tenemos un mock se limpie todo
        wrapper = shallow(<AddCategory setCategorias={setCategorias} />)

    });

    test('debe de mostrarse correctamente', ()=>{

        expect(wrapper).toMatchSnapshot(); //Sirve para crear una fotografia del componente llamado

    });

    test('Debe de cambiar la caja de texto', ()=>{
        
        const input = wrapper.find('input');
        const value = 'Hola mundo'

        input.simulate('change', {target: {value}}); // simulate se utiliza pra recrear un evento al darle click
        // {} de esta manera se hace referencia a un evento

        expect(wrapper.find('p').text().trim()).toBe(value)
        
    });

    test('No debe de postear la informacion con el submit', ()=>{

        wrapper.find('form').simulate('submit', {preventDefault(){}})
        expect( setCategorias ).not.toHaveBeenCalled() //Esta instruccion es que no alla sido llamada la funcion en el expect

    });

    test('Debe de llamar setcategorias y limpiar la caja de texto',()=>{

        const input = wrapper.find('input') //Busca el input
        const value = 'brenda';

        // Simiular el inputChange
        input.simulate('change', {target: {value}});
        expect(wrapper.find('p').text().trim()).toBe(value);

        // Simular el submit y el setctaegoria debe de ser llamado
        wrapper.find('form').simulate('submit', {preventDefault(){}})
        expect(setCategorias).toHaveBeenCalled();
        expect(setCategorias).toHaveBeenCalledTimes(1); //Las veces que tuvo que ser llamada la funcion
        expect(setCategorias).toHaveBeenCalledWith( expect.any(Function) ); //De esta manera se indica que la llamada sea una funcion no otro valor

        
        // El calor input debe de estar
        expect(wrapper.find('input').text()).toBe('');  
        // Se pueden usar props find('input).prop('value') se puede utilizar de esta manera y sera correcta igualmente

    });
})