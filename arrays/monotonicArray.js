const isMonotonic = (array) => {
	return (
		array.every(
			(element, index) => index === 0 || element <= array[index - 1],
		) ||
		array.every((element, index) => index === 0 || element >= array[index - 1])
	);
};
