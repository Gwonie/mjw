let catNames = ["나비야", "치즈야", "두부야"];

// console.log(`${catNames} 이리와`);
// console.log(catNames + " 이리와");
// console.log(catNames, "이리와");

// console.log(catNames.length);

// cats();

// for (let i = 0; i < catNames.length; i++) {
//   console.log(catNames[i]);
// }

// setTimeout(() => {
//   for (let i = 0; i < catNames.length; i++) {
//     console.log(`${catNames} 이리온`);
//   }
// }, 3000);

let count = 0;

const intervalId = setInterval(() => {
  count++;
  console.log(count);
  for (let i = 0; i < catNames.length; i++) {
    console.log(`${catNames} 이리온`);
  }
  console.log("--------------------");

  if (count >= 3) {
    clearInterval(intervalId);
  }
}, 3000);
