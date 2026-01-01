// T.C : O(n)
// S.C. :O(1)

const largestElement = (nums) => {
	let largest = nums[0];
	for (let i = 1; i < nums.length; i++) {
		if (nums[i] > largest) {
			largest = nums[i];
		}
	}

	return largest;
};


// Using built-in
// Math.max(...nums);