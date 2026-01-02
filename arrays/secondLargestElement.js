// T.C : O(n)
// S.C. :O(1)

const secondLargest = (nums) => {
	let largest = -Infinity,
		secondLargest = -Infinity;

	for (let i = 0; i < nums.length; i++) {
		if (largest < nums[i]) {
			secondLargest = largest;
			largest = nums[i];
		} else if (largest > nums[i] && nums[i] > secondLargest) {
			secondLargest = nums[i];
		}
	}

	return secondLargest === -Infinity ? -1 : secondLargest;
};
