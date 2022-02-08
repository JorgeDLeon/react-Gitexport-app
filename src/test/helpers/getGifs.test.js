import { getGifs } from '../../helpers/getGifs';

describe('Pruebas con getGifs', ()=>{

    test('Debe de traer diez elementos',async()=>{

        const gifs = await getGifs('One Punch');

        expect(gifs.length).toBe(10); //Va a retornar un arreglo por que se almacena en uno

    });


})
