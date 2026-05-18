const reverseString = (str) => {
	let len = str.length;
	let halfLen = Math.floor(len / 2);
	for (let i = 0; i < halfLen; i++) {
		[str[i], str[len - 1 - i]] = [str[len - 1 - i], str[i]];
	}
	return;
};


const reverseArray = (nums) => {
	let low = 0,
		high = nums.length - 1;
	while (low < high) {
		[nums[low], nums[high]] = [nums[high], nums[low]];
		low++;
		high--;
	}
};
