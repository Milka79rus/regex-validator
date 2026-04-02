import Validator from '../Validator';

const validator = new Validator();

test.each([
    ['skywalker', true],        // Обычное имя — ок
    ['Darth-Vader_77hero', true],   // Латиница, тире, подчеркивание и цифры (не более 3) — ок
    ['r2d2-c3po', true],        // Цифры внутри — ок
    ['user1234name', false],    // Ошибка: 4 цифры подряд
    ['1user', false],           // Ошибка: начинается с цифры
    ['user-', false],           // Ошибка: заканчивается тире
    ['_user', false],           // Ошибка: начинается с подчеркивания
    ['user7', false],           // Ошибка: заканчивается цифрой
    ['имя_пользователя', false], // Ошибка: кириллица запрещена
    ['user@mail', false],       // Ошибка: спецсимволы запрещены
])('валидация имени "%s" должна возвращать %s', (username, expected) => {
    const result = validator.validateUsername(username);
    expect(result).toBe(expected);
});