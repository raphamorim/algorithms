function a(my_string) {
  return my_string.indexOf("ba") == -1;
}

console.log(a("aaabbb"));
console.log(a("abab"));
console.log(a("bbb"));
