function is_valid_parentheses(my_string) {
	let arr = my_string.split("");
	let expected = null;
	let is_valid = true;
	for (var i = 0; i < arr.length; i++) {
		if (expected) {
			if (expected != arr[i]) {
				is_valid = false;
				break;
			} else {
				expected = null;
			}
		} else {
			if (arr[i] == "(") {
				expected = ")";
			} else if (arr[i] == "[") {
				expected = "]";
			} else if (arr[i] == "{") {
				expected = "}";
			}
		}
	}

	return is_valid;
}

console.log(is_valid_parentheses("()"));
console.log(is_valid_parentheses("()[]{}"));
console.log(is_valid_parentheses("(]"));