import React from 'react'
import '@testing-library/jest-dom'

import {shallow} from "enzyme";
import GifExpertApp from '../GifExpertApp';

describe('Pruebas en GifExpertApp', () => {
    

    test('debe mostrarse correctamente ', () => {
        
        const wrapped = shallow( <GifExpertApp /> )
        expect(wrapped).toMatchSnapshot();
    });
    
    test('debe de mostrar una lista de categorias ', () => {
        
        const categories = ['One Punch', 'Dragon Ball'];
        const wrapped = shallow( <GifExpertApp  defaultCategories={ categories } /> )

        expect(wrapped).toMatchSnapshot();
        expect(wrapped.find('GifGrid').length).toBe( categories.length );
    })
    

})
