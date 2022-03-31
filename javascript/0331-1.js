function test(pet, like) {
  for (i = 0; i < 3; i++) {
    console.log(`안녕, ${pet}!! ${like}`);
  }
  console.log(`---------------------`);
}

test("강아지", "좋아요♥");
// test("고양이");

// setTimeout(test, 3000, "쿼카", "조금 좋아요");
// setInterval(test, 5000, "친칠라", "매우 좋아요");
