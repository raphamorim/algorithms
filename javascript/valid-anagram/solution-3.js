// Time complexity: (s, t) where is s and t the array lenght
// Space complexity:

var isAnagram = function(s, t) {
    // ex: [r,a,t]
    var arr_s = Array.from(s.split(""));
    // ex: [c,a,t]
    var arr_t = Array.from(t.split(""));

    if (arr_s.length != arr_t.length) {
        return false;
    }

    var character_collection_t = new Map();
    var character_collection_s = new Map();

    for (let i = 0; i < arr_t.length; i++) {
        if (!character_collection_t.has(arr_t[i])) {
            character_collection_t.set(arr_t[i], 1);
        } else {
            character_collection_t.set(arr_t[i], character_collection_t.get(arr_t[i]) + 1);
        }

        if (!character_collection_s.has(arr_s[i])) {
            character_collection_s.set(arr_s[i], 1);
        } else {
            character_collection_s.set(arr_s[i], character_collection_s.get(arr_s[i]) + 1);
        }
    }

    if (character_collection_t.size != character_collection_s.size) {
        return false;
    }

    var is_anagram = true;
    var iterator = character_collection_t.keys();
    for (let i = 0; i < character_collection_t.size; i++) {
        let key = iterator.next().value;
        if (!character_collection_t.has(key)) {
            is_anagram = false;
            break;
        }

        if (character_collection_t.get(key) != character_collection_s.get(key)) {
            is_anagram = false;
            break;
        }
    };

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