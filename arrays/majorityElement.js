const findMajority = (arr) => {
	// Step 1: Find Candidate
	let res = arr[0];
	let votes = 1;

	for (let i = 1; i < arr.length; i++) {
		if (votes === 0) {
			res = arr[i];
			votes = 1;
		} else if (arr[i] === res) {
			votes++;
		} else {
			votes--;
		}
	}

	// Step 2: Validate Candidate
	let count = 0;

	for (let i = 0; i < arr.length; i++) {
		if (arr[i] === res) {
			count++;
		}
	}

	if (count > Math.floor(arr.length / 2)) {
		return res;
	} else {
		return null;
	}
}
