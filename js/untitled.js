var filter = function (array, fn) {
	var newArray = [], result;
	// Looping over each item in the input array
	for (var i = 0; i < array.length; i++) {
		// Executing the fn() function for each item
		result = fn(array[i]);
		// If the result of fn(item) === true, add item to new array
		if (result === true) {
			newArray.push(array[i]);
		}
	}
	// Return new array
	return newArray;
};

filter(['asdf', 1, 3, 'something', {}, function () {}], function (item) {
	return typeof item === 'number';
});