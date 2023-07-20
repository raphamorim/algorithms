// Time complexity: O(s + t) where s and t are string lenghts
// Space complexity: O(s^2, t^2) 

var isAnagram = function(s, t) {
    let arr_s = Array.from(s.split("")).sort(); // time: O(s) where s is len
    let arr_t = Array.from(t.split("")).sort(); // time: O(t) where t is len
    return JSON.stringify(arr_s) == JSON.stringify(arr_t); // time: O(s + t) where s and t lenghts
};

var long_string = new Array(40000).toString();
const test = require('../helpers/test');
const {start, end} = require('../helpers/timer');
start();
test(isAnagram("rat", "cat"), false);
test(isAnagram("anagram", "nagaram"), true);
test(isAnagram("angram", "nagaram"), false);
test(isAnagram("ann", "ana"), false);
test(isAnagram(
    "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA", 
    "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"),
    true
);
test(isAnagram(long_string,  long_string), true);
end();