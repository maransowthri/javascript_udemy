let re;
let str;

// re = /hel{0,2}o/i;(
// re = /hel{2,}o/i;
// re = /([\d]x){3}/i;
// str = "3x3x3x";

re = /\w+/; /** it will match for all albhanumeric letter(a-zA-Z), number(0-9) & underscore(_) */
re = /\W+/; /** it will match for all except albhanumeric letter(a-zA-Z), number(0-9) & underscore(_) */
re = /\d+/; /** it will match for all number(0-9) */
re = /\D+/; /** it will match for all except number(0-9) */
re = /\s+/; /** it will match for all white spaces */
re = /\S+/; /** it will match for all except white spaces */
re = /hell\b/; /** it will match for a complete word */

/** Assertions */
re = /x(?=r)/; /** x only if followed by y */
re = /x(?!r)/; /** x only if not followed by y */
str = "hello there we can take xyay";

console.log(re.test(str));
console.log(re.exec(str));
