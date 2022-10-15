import Citas from '../js/classes/Citas';

describe('Probar clases de citas', () => {

    const citas = new Citas();

    test('Agregar una nueva cita', () => {
        const citaObj = {
            mascota: 'Hook',
            propietario: 'Kloster',
            telefono: '229912342',
            fecha: '10/10/2022',
            hora:'10:30',
            sintomas: 'No come'
        };

        citaObj.id = Date.now();

        citas.agregarCita(citaObj);

        // Prueba
        expect(citas).toMatchSnapshot();
    })
})