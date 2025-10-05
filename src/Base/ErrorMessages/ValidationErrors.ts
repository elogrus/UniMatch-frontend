export const ValidationErrors = {
    required: "Поле не может быть пустым",
    email: "Неправильный формат Email",
    password:
        "Пароль должен состоять из 5-50 символов, содержать заглавную и строчную буквы, специальный символ, цифру",
    badFormat: (format?: string) =>
        `Неправильный формат${format ? " " + format : ""}`,
    minLength: (minLength: number) =>
        `Минимальная длина: ${minLength} символов`,
    maxLength: (maxLength: number) =>
        `Максимальная длина: ${maxLength} символов`,
    allowedSymbols: (allowedSymbols: string) =>
        `Разрешенные символы: ${allowedSymbols}`,
    min: (min: number) => `Минимум: ${min}`,
    max: (max: number) => `Максимум: ${max}`,
};
