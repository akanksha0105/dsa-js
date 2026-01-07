//T.C. : O(N)
//S.C. : O(1)

const reverseString = (str) => {
	let len = str.length;
	let halfLen = Math.floor(len / 2);
	for (let i = 0; i < halfLen; i++) {
		[str[i], str[len - 1 - i]] = [str[len - 1 - i], str[i]];
	}
	return;
};



// const reverseString = (str) => {
// 	let left = 0,
// 		right = str.length - 1;

// 	// conversion from string to array for mutability
// 	s = str.split("");

// 	// Swap characters from both ends till we reach
// 	// the middle of the string
// 	while (left < right) {
// 		[s[left], s[right]] = [s[right], s[left]];
// 		left++;
// 		right--;
// 	}

// 	return s.join("");
// };