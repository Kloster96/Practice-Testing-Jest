
const password = "123456";

describe('Valida que el password no este vacio y tenga 6 caracteres o mas', () => {
    test('que el password tenga 6 caracteres', () => {
        expect(password).toHaveLength(6);
    });

    test('Password no vacio', () => {
        expect(password).not.toHaveLength(0);
    })
});