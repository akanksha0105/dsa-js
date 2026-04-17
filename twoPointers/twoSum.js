const twoSum = (nums, target) => {
	let n = nums.length;
	let map = {};

	for (let i = 0; i < n; i++) {
		let pairToFind = target - nums[i];
		if (pairToFind in map && map[pairToFind] !== i) {
			return [i, map[pairToFind]];
		} else {
			map[nums[i]] = i;
		}
	}
};
