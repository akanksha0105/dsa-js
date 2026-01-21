function printFreq(array, n) {
	let freq = 1;
	let idx = 1;
	while (idx < n) {
		while (idx < n && array[idx] === array[idx - 1]) {
			freq++;
			idx++;
		}

		console.log(`${array[idx - 1]} : ${freq}`);

		idx++;
		freq = 1;
	}
}
