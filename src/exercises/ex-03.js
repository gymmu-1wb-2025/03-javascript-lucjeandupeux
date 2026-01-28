const myname = process.argv[2];
const myage = Number(process.argv[3]);

console.log(
	`Hallo ${myname} du bist ${myage} Jahre alt, an der Matur wirst du ${myage + 4} Jahre alt sein!`,
);
