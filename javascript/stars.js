let i = 0;
let j = 0;
let k = 0;

for (i = 1; i < 6; i++) {
  for (j = 1; j < 6; j++) {
    process.stdout.write("*");
  }
  process.stdout.write("\n");
}

console.log("---------------------");

for (i = 1; i < 6; i++) {
  for (j = 1; j <= i; j++) {
    process.stdout.write("*");
  }
  process.stdout.write("\n");
}

console.log("---------------------");

for (i = 1; i < 6; i++) {
  for (j = 1; j <= 6 - i; j++) {
    process.stdout.write(" ");
  }
  for (k = 1; k <= i; k++) {
    process.stdout.write("*");
  }
  process.stdout.write("\n");
}

console.log("---------------------");

for (i = 6; i > 0; i--) {
  for (j = 1; j < i; j++) {
    process.stdout.write("*");
  }
  process.stdout.write("\n");
}

console.log("---------------------");

for (i = 1; i < 6; i++) {
  for (j = 1; j <= i; j++) {
    process.stdout.write(" ");
  }
  for (k = 1; k <= 6 - i; k++) {
    process.stdout.write("*");
  }
  process.stdout.write("\n");
}

console.log("---------------------");

for (i = 1; i < 6; i++) {
  for (j = 1; j <= 6 - i; j++) {
    process.stdout.write(" ");
  }
  for (k = 1; k <= 2 * i - 1; k++) {
    process.stdout.write("*");
  }
  process.stdout.write("\n");
}

console.log("---------------------");

for (i = 1; i < 6; i++) {
  for (j = 1; j <= i; j++) {
    process.stdout.write(" ");
  }
  for (k = 1; k <= 10 - (2 * i - 1); k++) {
    process.stdout.write("*");
  }
  process.stdout.write("\n");
}

console.log("---------------------");
