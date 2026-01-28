const myweight = Number(process.argv[2]);
const myheight = Number(process.argv[3]);

console.log(
	`Du wiegst ${myweight}kg und bist ${myheight}m gross, dein BMI lautet ${myweight / myheight ** 2}.`,
);
