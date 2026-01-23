// T.C : O(n)
// S.C. :O(1)

const getConcatenation = (nums) => {
	let concatedArray = [];
	let n = nums.length;
	for (let i = 0; i < n; i++) {
		concatedArray[i] = nums[i];
		concatedArray[i + n] = nums[i];
	}

	return concatedArray;
};
