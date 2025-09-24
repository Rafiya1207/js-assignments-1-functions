function simpleInterest(p, t, r) {
  return (p * t * r) / 100;
}

function composeMessage(p, t, r, expectedResult, receivedResult) {
  const resultCharacter = receivedResult === expectedResult ? "✅" : "❌";
  const message = resultCharacter + "simple interest of principal " + p + ", time " + t + ", rate " + r + " should be " + expectedResult + " and was " + receivedResult + "\n";
  return message;
}

function testSimpleInterest(p, t, r, expectedResult) {
  const receivedResult = simpleInterest(p, t, r);
  console.log(composeMessage(p, t, r, expectedResult, receivedResult));
}

function testAll() {
  testSimpleInterest(0, 0, 0, 0);
  testSimpleInterest(0, 1, 2, 0);
  testSimpleInterest(1000, 5, 2, 100);
  testSimpleInterest(2000, 4, 3, 240);
  testSimpleInterest(5000, 2, 2, 200);
  testSimpleInterest(5500, 10, 5, 2750);
}

function main() {
  testAll();
}

main();
