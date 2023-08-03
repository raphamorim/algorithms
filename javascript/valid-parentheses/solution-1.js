function valid_parentheses(str) {
	let arr = str.split();

	let expected = [];
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] === "(") {
			expected.push(")");
			continue;
		} else if (arr[i] === "[") {
			expected.push("]");
			continue;
		} else if (arr[i] === "{") {
			expected.push("}");
			continue;
		}

		let expected_item = expected.pop();
		if (arr[i] === ")" && expected_item != ")") {
			break;
		}

		if (arr[i] === "]" && expected_item != "]") {
			break;
		}

		if (arr[i] === "}" && expected_item != "}") {
			break;
		}
	}

	return !(expected.length > 0);
}

const test = require('../helpers/test');
test(valid_parentheses("()"), true);
test(valid_parentheses("()[]{}"), true);
test(valid_parentheses("(]"), true);

