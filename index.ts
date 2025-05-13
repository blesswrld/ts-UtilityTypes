// Функция для рассчета
function calculate(a: number, b: number): number {
    return a * b;
}

// Ссылка на функцию calculate через typeof
type CalculateRT = ReturnType<typeof calculate>;

let anotherRes: CalculateRT = 5; // success
// let anotherRes: CalculateRT = "5"; // error

// Получаем кортеж параметров "[a: number, b: number]"
type CalculatePT = Parameters<typeof calculate>;
// Фиксируем значение number для аргумента a
type PT1 = Parameters<(a: number) => number>;
// Передаём generic тип -- вывод (Unknown) тк T - любой тип
type PT2 = Parameters<<T>(arg: T) => T>;

class Example {
    constructor(a: number) {}
}
// Получаем параметры (аргументы) из класса Example
type T0 = ConstructorParameters<typeof Example>;
