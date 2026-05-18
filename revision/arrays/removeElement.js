const removeElement = (nums, val) => {
	let nextValidElementIndex = -1;

	for (let i = 0; i < nums.length; i++) {
		if (nums[i] !== val) {
			nextValidElementIndex++;
			nums[nextValidElementIndex] = nums[i];
		}
	}
	return nextValidElementIndex + 1;
};
