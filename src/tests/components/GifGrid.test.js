import React from 'react'
import '@testing-library/jest-dom'

import {shallow} from "enzyme";
import { GifGrid } from '../../components/GifGrid';
import { useFetchGifs } from '../../hooks/useFechGif';
jest.mock('../../hooks/useFechGif') //esto es para fingir cualquier llamada a ese archivo y suponer o controlar la info que va a responder

describe('Pruebas en <GifGrid />', () => {
    
    const category = 'One Punch';
    

    test('debe mostrarse correctamente ', () => {
        
        useFetchGifs.mockReturnValue({
            data: [],
            loading: true
        });//esto hace que cuando se llame el useFetch va a regresar el valor que le declaro

        const wrapped = shallow( <GifGrid category= { category } /> )
        expect(wrapped).toMatchSnapshot();

    });

    test('debe de mostrar items cuando se carga la imagen useFetchGifs ', () => {


        const gifs = [{
            id: 'ABC',
            url: 'https://localhost/cualquiercosa.jpg',
            title: 'Cualquier Cosa'
        }];

        useFetchGifs.mockReturnValue({
            data: gifs,
            loading: true
        });
        const wrapped = shallow( <GifGrid category= { category } /> )

        expect( wrapped.find('GifGridItem').length).toBe(gifs.length)//se toma el nombre del elemento GifGridItem
        
        
    })
    
    

})
