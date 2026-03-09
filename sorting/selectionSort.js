const selectionSort = (n, nums) => {
	for (let i = 0; i < n - 1; i++) {
		let min = i;

		// find index of minimum element
		for (let j = i + 1; j < n; j++) {
			if (nums[j] < nums[min]) {
				min = j;
			}
		}

		// swap
		if (min !== i) {
			[nums[i], nums[min]] = [nums[min], nums[i]];
		}
	}

	return nums;
};
