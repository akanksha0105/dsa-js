// T.C : O(n)
// S.C. :O(1)

const leaders = (a) => {
	let n = a.length;
	let result = [];

	let maxFromRight = a[n - 1];
	result.push(maxFromRight);

	for (let i = n - 2; i >= 0; i--) {
		if (a[i] >= maxFromRight) {
			maxFromRight = a[i];
			result.push(a[i]);
		}
	}

	return result.reverse();
};
