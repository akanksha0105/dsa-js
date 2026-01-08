// T.C : O(n)
// S.C. :O(1)

const containsDuplicate = (nums) => {
	let numsSet = new Set(nums);
	return numsSet.size !== nums.length;
};
