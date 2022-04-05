let res = 0;

for (let dan = 6; dan < 9; dan++) {
  console.log(`---${dan} 단---`);
  for (let num = 1; num < 10; num++) {
    res = dan * num;
    console.log(`${dan} * ${num} = ${res}`);
  }
}
