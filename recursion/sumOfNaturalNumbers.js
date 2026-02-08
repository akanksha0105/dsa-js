const sum = (n) => {
	if (n == 1) return 1;

	return n + sum(n - 1);
};


//can use in-built formula - n*(n+1)/2
