let arr_2 = [1, 2, 1, '1', 5, 6, null, 1, 9, 10, Boolean];

for (let i = 0; i < arr_2.length; ++i) {
  if (arr_2[i] !== arr_2[0]) {
    console.log('false')
  } else {
    console.log('true')
  }
}