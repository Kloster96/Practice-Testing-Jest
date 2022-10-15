const cliente = {
    nombre: 'Luciano Kloster',
    balance: 500
};

describe('Testing a el cliente', () => {
    test('El cliente es premium', () => {
        expect(cliente.balance).toBeGreaterThan(400);
    });

    test('Es Luciano Kloster ?', () => {
        expect(cliente.nombre).toBe('Luciano Kloster');
    });

    test('No es otro cliente', () => {
        expect(cliente.nombre).not.toBe('Pedro Gonzales');
    });

    test('No tiene 500', () => {
        expect(cliente.balance).not.toBe(400);
    });
});