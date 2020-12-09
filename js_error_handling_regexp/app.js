try {
  /** This wont throw any exceptions */
  const a = 3 / 0;
  console.log(a);
  /** This will throw ReferenceError */
  undeclaredFunction();
  /** This will throw TypeError */
  null.callFunc();
  /** This won't throw any exception */
  eval("'Hi'");
  /** This will throw SyntaxError */
  eval("Hi");
  /** This will throw URIError */
  decodeURI("%");
  /** Custom Errors */
  if (true) {
    throw new Error("This is unexpected");
  }
} catch (err) {
  console.log("Something went wrong!");
  console.log(err);
  console.log(err.message);
  console.log(err.name);
  console.log(err instanceof ReferenceError);
  console.log(err instanceof TypeError);
} finally {
  console.log("No one can stop me!");
}
