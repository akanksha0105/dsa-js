// T.C : O(n)
// S.C. :O(1)

const singleNumber = (nums) => {
	let xor = 0;

	for (let i = 0; i < nums.length; i++) {
		xor = xor ^ nums[i];
	}

	return xor;
};
