const rotate = (nums, k) => {
	let n = nums.length;
	k = k % n;

	reverse(nums, 0, n - 1); // reverse whole array
	reverse(nums, 0, k - 1); // reverse first k elements
	reverse(nums, k, n - 1); // reverse rest
};

const reverse = (arr, l, r) => {
	while (l < r) {
		[arr[l], arr[r]] = [arr[r], arr[l]];
		l++;
		r--;
	}
};
