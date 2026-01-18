const reverse = (array, low, high) => {
	while (low < high) {
		[array[low], array[high]] = [array[high], array[low]];
		high--;
		low++;
	}
	return array;
};

function leftRotateByD_Places(array, n, D) {
	array = reverse(array, 0, D - 1);
	array = reverse(array, D, n - 1);
	array = reverse(array, 0, n - 1);
	return array;
}
