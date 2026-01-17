//T.C: O(N)
//S.C. : O(1)

const leftRotate = (array, n) => {
	let temp = array[0];
	for (let i = 1; i < n; i++) {
		array[i - 1] = array[i];
	}
	array[n - 1] = temp;
	return array;
};
