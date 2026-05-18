var removeDuplicates = function (nums) {
	let lastUniqueElementIndex = 0;
	for (let i = 1; i < nums.length; i++) {
		if (nums[lastUniqueElementIndex] != nums[i]) {
			lastUniqueElementIndex++;
			nums[lastUniqueElementIndex] = nums[i];
		}
	}
	return lastUniqueElementIndex + 1;
};
