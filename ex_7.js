let arr_3 = [1, 2, 1, '1', 5, 6, null, 1, 9, 10, 0, 12, 22, 13, 0, 68, 100, 97, 0];
let e = 0;
let o = 0;
let n = 0;

arr.forEach(function(item){
  if (typeof item === 'number' && !isNaN(item)) {
    if (item === 0) {
      n += 1
    } else if (item % 2 === 0) {
      e += 1
    } else {
      o +=1
    }
  }
})

console.log(`В массиве: четных - ${e}, нечетных - ${o}, нулей - ${n}`)