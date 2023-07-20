// Time Complexity: O(n^3) where n is the first array lenght
// Why? We iterate over s array length
// It also adds an indexOf with splice that iterates

// Space Complexity: O(s+t) where is s and t are the string lenght
// Why? It allocates two strings as arrays
var isAnagram = function(s, t) {
    let arr_s = Array.from(s.split(""));
    let arr_t = Array.from(t.split(""));
    let is_anagram = true;

    if (arr_s.length != arr_t.length) {
        return false;
    }

    for (let i = 0; i <= arr_s.length - 1; i++) {
        if (arr_t.length <= 0) {
            is_anagram = false;
            break;
        }

        let char_index = arr_t.indexOf(arr_s[i]);
        if (!(char_index >= 0)) {
            is_anagram = false;
            break;
        }

        arr_t.splice(char_index, 1);
    }

    return is_anagram;
};

var long_string = new Array(40000).toString();
const {test} = require('../helpers/test');
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