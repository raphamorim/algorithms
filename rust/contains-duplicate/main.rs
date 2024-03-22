// # Contains Duplicate

// Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

// Example 1:

// ```bash
// Input: nums = [1,2,3,1]
// Output: true
// ```

// Example 2:

// ```bash
// Input: nums = [1,2,3,4]
// Output: false
// ```

// Example 3:

// ```bash
// Input: nums = [1,1,1,3,3,4,3,2,4,2]
// Output: true
// ```

// Constraints:

// - 1 <= nums.length <= 105
// - -109 <= nums[i] <= 109

use std::collections::HashMap;

fn contains_duplicate(input: Vec<u8>) -> bool {
	let mut dict: HashMap<u8, bool> = HashMap::new();
	for i in 0..input.len() {
		if let Some(value) = dict.get(&input[i]) {
			return true;
		} else{
			dict.insert(input[i], true);
		}
	}

	false
}

fn main() {
	println!("{}", contains_duplicate([1,2,3,1].to_vec()));
	println!("{}", contains_duplicate([1,2,3,4].to_vec()));
	println!("{}", contains_duplicate([1,1,1,3,3,4,3,2,4,2].to_vec()));
}