//T.C. : O(N)
//S.C. : O(1)

const moveZeroes = (nums) => {
	let x = 0;
	for (let i = 0; i < nums.length; i++) {
		if (nums[i] !== 0) {
			nums[x] = nums[i];
			x++;
		}
	}
	for (let i = x; i < nums.length; i++) {
		nums[i] = 0;
	}
};
