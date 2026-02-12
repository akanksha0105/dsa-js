const productExceptSelf = function (nums) {
	const n = nums.length;
	const res = new Array(n).fill(1);

	for (let i = 1; i < n; i++) {
		res[i] = res[i - 1] * nums[i - 1];
	}

	let postfix = 1;
	for (let i = n - 1; i >= 0; i--) {
		res[i] *= postfix;
		postfix *= nums[i];
	}
	return res;
};

// productExceptSelf(nums) {
//         let n = nums.length;
//         let leftProductArray = [], rightProductArray = [], result = [];
//         leftProductArray[0] = 1;
//         rightProductArray[n-1] = 1;
//         for(let i = 1;i<n; i++){
//             leftProductArray[i] =  leftProductArray[i-1] *nums[i-1];
//         }

//         for(let i = n-2; i>=0; i--){
//             rightProductArray[i] =  rightProductArray[i+1] *nums[i+1];
//         }

//         for(let i = 0; i<n ;i ++){
//             result[i] = leftProductArray[i] * rightProductArray[i];
//         }

//         return result;
//     }
