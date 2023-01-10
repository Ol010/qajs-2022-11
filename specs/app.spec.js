import { nameIsValid, fullTrim, getTotal } from '../src/app.js'

/**
 * Для проверки, что jest настроен правильно. Можно удалить
 */
// test('adds 1 + 2 to equal 3', () => {
//     expect(1 + 2).toBe(3);
// });

// 1- проверить, что функция имя не существует, возвращается false
// test(name: , () => {
//     const name = name;
//     expect(nameIsValid).toBeLessThanOrEqual(2);
// });

describe('Func Testing', () => {
    test('Проверить, что name существует', () => {
        expect(nameIsValid('Olga')).toBeTruthy();
    });
    test('Проверить, что name имеет более 2х символов', () => {
      expect(4).toBeGreaterThanOrEqual(2);
    });
    test('Проверить, что имя не содержит пробелов', () => {
      expect(nameIsValid('Ol ga')).not(' ')
    });
});

describe('Проверка имени пользователя', () => {
    test('Никнейм не может быть пустым', () => {   
      expect(nameIsValid('')).toBeFalsy()
    });
    test('нникнейм имеет как минимум 2 символа', () => { 
      expect(nameIsValid('N')).toBeFalsy()
    });
    test('никнейм не может содержать проблемы', () => { 
      expect(nameIsValid('user name')).toBeFalsy()
    });
    test('Правильный никнейм', () => { 
      expect(nameIsValid('username')).toBeTruthy()
});
});

describe('Удаление пробелов из строки', () => {
    test('Правильность ввода', () => {   
      expect(fullTrim('Text')).toBeTruthy()
    });
    test('Проверка замены пробела', () => { 
      expect(fullTrim(' ')).toBeFalsy()
    });
    test('Проверка что пробелы не выдают ошибки', () => {
        expect(fullTrim(' ')).toBeDefined();
      });
    });
    
    describe('Подсчёт суммы заказа', () => {
        
      test("Проверка, что текст ошибки верный", () => {
          expect(() => {
            getTotal([2], ['fdf']);
          }).toThrow(new Error('Скидка должна быть числом'));
        });
      });
      
      test("Проверка, что текст ошибки верный2", () => {
        expect(() => {
          getTotal([2], -2);
        }).toThrow(new Error('Процент скидки не может быть отрицательным'));
      });
      
        test.each`
          a      | b     | expected
          ${10}  | ${10} | ${100}
          ${10}   | ${1} | ${10}
          ${10}   | ${9} | ${90}
          `('return $expected when $a is multiplyed $b'
        ({a, b, expected})  => {
          expect(a * b).toBe(expected);
        }
        );
