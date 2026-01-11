//T.C. : O(N)
//S.C. : O(1)

const sortedSquares = (nums) => {
	let n = nums.length;
	let l = 0,
		r = n - 1,
		resultIndex = n - 1,
		result = new Array(n);

	while (l <= r) {
		if (Math.abs(nums[l]) > Math.abs(nums[r])) {
			result[resultIndex] = nums[l] * nums[l];
			l++;
		} else {
			result[resultIndex] = nums[r] * nums[r];
			r--;
		}
		resultIndex--;
	}

	return result;
};
