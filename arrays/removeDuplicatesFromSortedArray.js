// T.C : O(n)
// S.C. :O(1)

const removeDuplicates = (nums) => {
	let x = 0;
	for (let i = 1; i < nums.length; i++) {
		if (nums[i] > nums[x]) {
			x++;
			nums[x] = nums[i];
		}
	}
	return x + 1;
};
