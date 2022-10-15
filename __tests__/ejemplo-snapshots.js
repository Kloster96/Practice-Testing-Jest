const cliente = {
    nombre: 'Luciano Kloster',
    balance: 500,
    tipo: 'Premiun'
};

describe('Testing al cliente', () => {
    test('Es Luciano Kloster', () => {
        expect(cliente).toMatchSnapshot();
    });
});