function printEvenNumbers(startOfTheRange, endOfTheRange) {
    const firstEvenNumber = (startOfTheRange % 2 === 0) ? startOfTheRange : startOfTheRange + 1;
    let evenNumbers = "";

    for (let evenNumber = firstEvenNumber; evenNumber <= endOfTheRange; evenNumber = evenNumber + 2) {
        evenNumbers = evenNumbers + " " + evenNumber;
    }
    return evenNumbers;
}

function composeMessage(startRange, endRange, expectedResult, receivedResult) {
  const resultCharacter = receivedResult === expectedResult ? "✅" : "❌";
  const message = resultCharacter + "even numbers from " + startRange + " - " + endRange + " should be " + expectedResult + " and was " + receivedResult + "\n";
  return message;
}

function testPrintEvenNumbers(startOfTheRange, endOfTheRange, expectedResult) {
  const receivedResult = printEvenNumbers(startOfTheRange, endOfTheRange);
  console.log(composeMessage(startOfTheRange, endOfTheRange, expectedResult, receivedResult));
}

function testAll() {
  testPrintEvenNumbers(0, 10, " 0 2 4 6 8 10");
  testPrintEvenNumbers(0, 1, " 0");
  testPrintEvenNumbers(0, 0, " 0");
  testPrintEvenNumbers(2, 6, " 2 4 6");
  testPrintEvenNumbers(12, 19, " 12 14 16 18");
  testPrintEvenNumbers(11, 15, " 12 14");
}

function main() {
  testAll();
}

main();
