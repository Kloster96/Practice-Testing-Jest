const carrito = ['Producto 1','Producto 2', 'Producto 3', 'Producto 4'];

describe('Testing al carrito', () => {
    test('Probar que el array tenga 4 elementos', () => {
        expect(carrito).toHaveLength(4);
    });
    
    test('Verificar que el carrito no este vacio', () => {
        expect(carrito).not.toHaveLength(0);
    });
});