function factorial(n) {
    let product = 1;
    
    for (let currentNumber = 1; currentNumber <= n; currentNumber++){
        product = product * currentNumber;
    }
    return product;
}

function composeMessage(n, expectedResult, receivedResult) {
  const resultCharacter = receivedResult === expectedResult ? "✅" : "❌";
  const message = resultCharacter + "factorial of " + n + " should be " + expectedResult + " and was " + receivedResult + "\n";
  return message;
}

function testFactorial(n, expectedResult) {
  const receivedResult = factorial(n);
  console.log(composeMessage(n, expectedResult, receivedResult));
}

function testAll() {
  testFactorial(0, 1);
  testFactorial(1, 1);
  testFactorial(2, 2);
  testFactorial(3, 6);
  testFactorial(5, 120);
}

function main() {
  testAll();
}

main();
