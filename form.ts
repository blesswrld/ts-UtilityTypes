// Интерфейсы
interface IForm {
    login: string;
    password: string;
    email: string; // Доп свойство для проверки
}

interface ValidationEntry {
    isValid: boolean;
    errorMsg?: string;
}

// Создаём зависимость для validationData перебирая ключи в IForm
type ValidationData = { [K in keyof IForm]: ValidationEntry };

// Необходимо типизировать объект валидации
// Учтите, что данные в форме могут расширяться и эти поля
// должны появиться и в объекте валидации

const validationData: ValidationData = {
    login: { isValid: false, errorMsg: "At least 3 characters" },
    password: { isValid: true },
    email: { isValid: true, errorMsg: "Invalid email" }, // Доп свойство для проверки
};

// --- ЗАДАЧА ВЫПОЛНЕНА ---
