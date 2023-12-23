let x;
x = 3;
let check = typeof x;

if (check == "number") {
    console.log("Введено число")
} else if (check == "string") {
    console.log("Введена строка")
} else if (check == "boolean") {
    console.log("Введен логический тип данных")
} else {
    console.log("Тип x не опеределен")
}