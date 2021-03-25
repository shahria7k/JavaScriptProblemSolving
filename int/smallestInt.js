const integers = [1, 2, 3, 5];
integers.forEach((int) => {
	let carry = int;
	carry + 1 == integers[int + 1]
		? console.log(int)
		: console.log("no integer is missing");
});
