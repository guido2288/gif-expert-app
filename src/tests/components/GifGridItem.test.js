import React from 'react'
import { shallow } from "enzyme";
import { GifGridItem } from "../../components/GifGridItem";


describe('Pruebas en  <GifGridItem/> ', () => {

    const title = 'Un titulo';
    const url = 'https://localhost/algo.jpg';
    const wrapped = shallow(<GifGridItem title={ title } url={ url } />)

    test('debe de mostrar el texto correctamente ', () => {
        
        
        
        expect ( wrapped).toMatchSnapshot();
    })

    test('debe de tener un párrafo con el title ', () => {
        
        const p = wrapped.find('p');
        expect( p.text().trim()).toBe( title ) ;

    })
    
    test('debe tener la imagen igual a la url y alt de los props  ', () => {

        const img = wrapped.find('img');
        console.log(img.props().src)
        expect( img.prop('src')).toBe(url);
        expect( img.prop('alt')).toBe(title);
    });

    test('debe de tener la class animate__fadeIn ', () => {
        
        const div= wrapped.find('div');

        expect( div.hasClass("card animate__animated animate__fadeIn")).toBe(true)

    })
    
    
    
    
})
