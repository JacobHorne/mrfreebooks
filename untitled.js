var filter = function (array, func) {
	var result = [];

	for (var i = 0; i < array.length; i++) {
		if (func(array[i])) {
			result.push(array[i]);
		}
	}

	return result;


var concat = function (array, items) {
	var result = [];

	for (var i = 0; i < array.length; i++) {
		result.push(array[i]);
	}

	for (var i = 0; i < items.length; i++) {
		result.push(items[i]);
	}

	return result;
};

/*var myArray = [1, 2, 3];

Array.prototype.numify = function () {
  for (var i = 0; i < this.length; i++) {
    this[i] = i;
  }
}

myArray.numify();
undefined
myArray
[0, 1, 2]
myArray = ['hello', 'i', 'like', 'turtles'];
["hello", "i", "like", "turtles"]
myArray.numify()
undefined
myArray
[0, 1, 2, 3]*/