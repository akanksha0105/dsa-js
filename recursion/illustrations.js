// print n to 1 using recursion
const rec_one = (n) => {
	if (n === 0) return;
	console.log(n);
	rec_one(n - 1);
};

rec_one(5);

// print 1 to n using recursion
const rec_two = (n) => {
	if (n === 0) return;

	rec_one(n - 1);
	console.log(n);
};

rec_two(5);
