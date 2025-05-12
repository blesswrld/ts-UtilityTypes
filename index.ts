// Интерфейс
interface Currencies {
    usa: "usd";
    china: "cny";
    ukraine: "uah";
    kz: "tenge";
}

// Исключаем тип "usa" из интерфейса Currencies (Omit - исключение)
type CurrWithoutUsa = Omit<Currencies, "usa">;
// Фильтрация по свойству-ам (Pick - фильтрация)
type CurrUSAAndUkraine = Pick<Currencies, "usa" | "ukraine">;
// Удаляем "usa" после перебора Union-типа стран с помощью оператора (keyof)
type CountriesWithoutUSA = Exclude<keyof Currencies, "usa">;
// Выбираем анимацию "swipe" и вытаскиваем ее из MyAnimation (Extract - для выбора значения)
type Swipetype = Extract<MyAnimation, "swipe">;
// type Swipetype = Extract<MyAnimation | Direction, "swipe">;
// Удаляем анимацию "swipe" из Union-типа (Exclude - удаление)
type FadeType = Exclude<MyAnimation, "swipe">;

// Generic type
type CreateCustomCurr<T> = {
    // Важно: Используется отображение типов с переименованием ключей (as). Для каждого ключа P создаётся новый ключ с префиксом `custom` и капитализированным именем (например, `usa` → `customUsa`). `string & P` гарантирует, что P воспринимается как строка для Capitalize.
    [P in keyof T as `custom${Capitalize<string & P>}`]: string;
};

// Union - Тип
type PlayersNames = "Alex" | "John";
type GameDataCurr = Record<PlayersNames, CustomCurrencies>;

// Кастомный тип
type CustomCurrencies = CreateCustomCurr<Currencies>;

// Объект со свойствами Alex и John
const gameData: GameDataCurr = {
    Alex: {
        customChina: "qqqqqq",
        customKz: "wwwww",
        customUkraine: "ddddd",
        customUsa: "ffffff",
    },
    John: {
        customChina: "qqqqqq",
        customKz: "wwwww",
        customUkraine: "ddddd",
        customUsa: "ffffff",
    },
};

// Union - Типы анимаций
type MyAnimation = "fade" | "swipe";
type Direction = "in" | "out";

// Важно: Шаблонные строковые типы комбинируют значения MyAnimation и Direction. Capitalize делает первую букву Direction заглавной, создавая типы вроде `fadeIn`, `fadeOut`, `swipeIn`, `swipeOut`.
type MyNewAnimation = `${MyAnimation}${Capitalize<Direction>}`;
