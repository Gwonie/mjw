// for (let dan = 9; dan <= 11; dan++) {
//   console.log(`---${dan}단---`);
//   for (let num = 1; num <= 9; num++) {
//     console.log(`${dan} X ${num} = ${dan * num}`);
//   }
// }

// function gugudan(min, max) {
//   console.log(`\n*** ${min}단 ~ ${max}단 ***`);
//   for (let dan = min; dan <= max; dan++) {
//     console.log(`---${dan}단---`);
//     for (let num = 1; num <= 9; num++) {
//       console.log(`${dan} X ${num} = ${dan * num}`);
//     }
//   }
// }

// gugudan(3, 5);

function gugudan2(a, b, c, d) {
  console.log(`\n*** ${a}단 ~ ${b}단 ***`);
  for (let dan = a; dan <= b; dan++) {
    console.log(`---${dan}단---`);
    for (let num = c; num <= d; num++) {
      console.log(`${dan} X ${num} = ${dan * num}`);
    }
  }
}

gugudan2(3, 5, 9, 11);
