const number = Number(process.argv[2]);
const divisor = Number(process.argv[3]);
const remainder = number % divisor;

if (remainder === 0) {
	console.log(`Die Zahl ${number} ist durch ${divisor} teilbar.`);
} else {
	console.log(`Die Zahl ${number} ist nicht durch ${divisor} teilbar.`);
}
