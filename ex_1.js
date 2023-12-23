
let result = prompt('Введите значение', '')
if (result === null) {
  alert('Упс, кажется, вы ошиблись')
} else if (isNaN(result % 2)) {
  alert('Ошибка, введено НЕ ЧИСЛО')
} else if (result % 2 === 0) {
  alert('Число четное')
} else {
  alert('Число нечетное')
}