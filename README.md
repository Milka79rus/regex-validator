# Regular Expressions — Task 1: Nicknames

[![Check Code](https://github.com/Milka79rus/regex-validator/actions/workflows/run.yml/badge.svg)](https://github.com/Milka79rus/regex-validator/actions/workflows/run.yml)

## Описание
Реализован класс `Validator` с методом `validateUsername`, который проверяет имена пользователей на соответствие корпоративным стандартам безопасности.

### Правила валидации:
1. Допустимы латинские буквы, цифры, тире `-` и подчёркивание `_`.
2. Имя не может содержать более 3-х цифр подряд.
3. Имя не может начинаться или заканчиваться цифрой, символом подчёркивания или тире.

## Технологии
* **JavaScript (ES6)**
* **RegExp** — регулярные выражения.
* **Jest** — тестирование (100% coverage).

---


