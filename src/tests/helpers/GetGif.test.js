import { getGif } from "../../helpers/Getgif";


describe('Pruebas con getGif fetch', () => {

    test('debe de traer 8 elementos ', async () => {
        
        const gifs = await getGif('One Punch');

        expect( gifs.length ).toBe( 8 );

    });


    test('debe de traer 8 elementos ', async () => {
        
        const gifs = await getGif('');

        
        expect( gifs.length ).toBe( 0 );

    })
    
    
})
