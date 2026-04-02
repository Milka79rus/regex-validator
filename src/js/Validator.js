export default class Validator {
    validateUsername(username) {
        // 1. Только латиница, цифры, тире и подчеркивание
        const reAllowedSymbols = /^[a-z0-9-_]+$/i;

        // 2. НЕ более 3-х цифр подряд (ищем 4 и инвертируем результат)
        const reFourDigits = /\d{4}/;

        // 3. НЕ начинается и НЕ заканчивается цифрой, тире или подчеркиванием
        // Используем [^\d_-] (любой символ КРОМЕ цифры, тире и подчеркивания)
        const reStartEnd = /^[^\d_-].*[^\d_-]$/i;

        return reAllowedSymbols.test(username)
            && !reFourDigits.test(username)
            && reStartEnd.test(username);
    }
}