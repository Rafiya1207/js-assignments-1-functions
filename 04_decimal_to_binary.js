function binary(decimalNumber) {
	if (decimalNumber === 0) {
		return decimalNumber + "";
	}

	let binaryNumber = "";

	while (decimalNumber > 0) {
		const lastBit = decimalNumber % 2;
		decimalNumber = (decimalNumber - lastBit) / 2;
		binaryNumber = lastBit + binaryNumber;
	}
	return binaryNumber;
}

function composeMessage(decimalNumber, expectedResult, receivedResult) {
	const resultCharacter = receivedResult === expectedResult ? "✅" : "❌";
	const message = resultCharacter + "binary of " + decimalNumber + " should be " + expectedResult + " and was " + receivedResult + "\n";
	return message;
}

function testDecimalToBinary(decimalNumber, expectedResult) {
	const receivedResult = binary(decimalNumber);
	console.log(composeMessage(decimalNumber, expectedResult, receivedResult));
}

function testAll() {
	testDecimalToBinary(0, "0");
	testDecimalToBinary(1, "1");
	testDecimalToBinary(2, "10");
	testDecimalToBinary(3, "11");
	testDecimalToBinary(4, "100");
	testDecimalToBinary(5, "101");
}

function main() {
	testAll();
}

main();
