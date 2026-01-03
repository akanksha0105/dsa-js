// T.C : O(n)
// S.C. :O(1)

const isSorted = (nums) => {
	for (let i = 1; i < nums.length; i++) {
		if (nums[i] < nums[i - 1]) return false;
	}
	return true;
};
