// const greeting = "Hello World";
// console.log(greeting);

/* ES5 */
// const person = require("./module1");
// console.log(person);

/* ES2015 import */
// import { person, greeting } from "./module2";

// console.log(person);
// console.log(greeting());

/* ES2015 import all*/
// import * as mod from "./module2";
// console.log(mod.person.name);
// console.log(mod.greeting());

/* ES2015 import from default*/
import init from "./module2";

init();
