// T.C : O(n)
// S.C. :O(1)

const reverseArray = (nums) => {
	let low = 0,
		high = nums.length - 1;
	while (low < high) {
		[nums[low], nums[high]] = [nums[high], nums[low]];
		low++;
		high--;
	}
};
