/**
 * String.matchAll(regex)
 * Returns iterator
 * 
 */
const regex = /[a-z]/g;
const str = 'abc';
const iterator = str.matchAll(regex);
const arr = [...iterator];

Array.from(iterator, console.log);

/**
 * ["a", index: 0, input: "abc", groups: undefined] 0
 * ["b", index: 1, input: "abc", groups: undefined] 1
 * ["c", index: 2, input: "abc", groups: undefined] 2
 */