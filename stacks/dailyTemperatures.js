const dailyTemperatures = (arr) => {
	  const stack = [];
    const ans = [];
    const n = arr.length;

    ans[n - 1] = 0;

    stack.push([arr[n - 1], n - 1]);

    for (let i = n - 2; i >= 0; i--) {

        while (
            stack.length &&
            arr[i] >= stack[stack.length - 1][0]
        ) {
            stack.pop();
        }

        if (stack.length) {
            ans[i] = stack[stack.length - 1][1] - i;
        } else {
            ans[i] = 0;
        }

        stack.push([arr[i], i]);
    }

    return ans;
};
