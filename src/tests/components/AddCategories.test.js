import React from 'react'
import '@testing-library/jest-dom'

import {shallow} from "enzyme";
import { AddCategories } from "../../components/AddCategories";

describe('Pruebas en <AddCategories/>', () => {

    const setCategories = jest.fn();
    let wrapped = shallow(<AddCategories  setCategories={ setCategories } />);

    //Antes de cada prueba reinicia el AddCategories a su estado original
    beforeEach( () => {
        jest.clearAllMocks();
        wrapped = shallow( <AddCategories  setCategories={ setCategories } />);
    });

    test('debe de mostrarse correctamente ', () => {       
        expect(wrapped).toMatchSnapshot();
    })
    
    test('debe de cambiar la caja de texto ', () => {
        const input = wrapped.find('input');
        const value = 'Hola mundo'

        input.simulate('change', { target: { value } } );
    })
    
    test('No debe de postear la informacion con submit ', () => {
        //simulacion con formulario en blanco
        wrapped.find('form').simulate('submit', { preventDefault(){} });

        //Que no se tiene que haber llamado
        expect( setCategories ).not.toHaveBeenCalled();
        
    })
    
    test('debe de llamar al setCategories y limpiar la caja de texto ', () => {

        
        const value = 'Hola Mundo';
        //1. simular el inputChange
        wrapped.find('input').simulate('change', {target:{value}})

        //2. simular el submit
        wrapped.find('form').simulate('submit', { preventDefault(){} })

        //3. setCategories se debe de haber llamado
        expect( setCategories ).toHaveBeenCalled();

        //4. el valor de la caja debe ser ''
        expect( wrapped.find('input').prop('value')).toBe('');

    })
    

})
