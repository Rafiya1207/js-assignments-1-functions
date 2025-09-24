function compoundInterest(p, t, r) {
  let principalAmount = p;

  for (let year = 1; year <= t; year++) {
    const simpleInterest = (principalAmount * r) / 100;
    principalAmount = principalAmount + simpleInterest;
  }

  return principalAmount - p;
}

function isReceivedexpectedResult(receivedResult, expectedResult) {
  return receivedResult < expectedResult + 1 && receivedResult > expectedResult - 1;
}

function composeMessage(p, t, r, expectedResult, receivedResult) {
  const resultCharacter = isReceivedexpectedResult(receivedResult, expectedResult) ? "✅" : "❌";
  const message = resultCharacter + "simple interest of principal " + p + ", time " + t + ", rate " + r + " should be " + expectedResult + " and was " + receivedResult + "\n";
  return message;
}

function testCompoundInterest(p, t, r, expectedResult) {
  const receivedResult = compoundInterest(p, t, r);
  console.log(composeMessage(p, t, r, expectedResult, receivedResult));
}

function testAll() {
  testCompoundInterest(0, 0, 0, 0);
  testCompoundInterest(0, 1, 2, 0);
  testCompoundInterest(1000, 1, 10, 100);
  testCompoundInterest(2000, 2, 10, 420);
  testCompoundInterest(1000, 2, 10, 210);
  testCompoundInterest(5000, 2, 2, 202);
  testCompoundInterest(1, 1, 100, 1);
  testCompoundInterest(7500, 2, 7, 1086);
}

function main() {
  testAll();
}

main();
