// let re = /hello/; /** regular */
// let re = /hello/i; /** case insensitive */
let re = /hello/g; /** search globally */

// console.log(re);
// console.log(re.source);
/** Executes and returns matches */
// const result = re.exec("hello");
// const result = re.exec("hello maran from hello");

/** returns true or false (matches or not) */
// const result = re.test("hello maran from hello");
// console.log(result);

/** same as exec but calling from String obj not from re obj */
// const myStr = "Hello World!";
// const result = myStr.match(/Hello/);
// console.log(result);

/** returns index of match else -1 */
// const myStr = "1. Hello World!";
// const result = myStr.search(/Hello/);
// console.log(result);

/** replace & replaceAll works as same */
const myStr = "Hello NAME. Nice to meet you NAME";
// const newStr = myStr.replace(/NAME/, "David");
// const newStr = myStr.replaceAll(/NAME/g, "David");
// console.log(newStr);
