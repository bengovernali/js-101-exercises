function hello(name) {
  if (name === undefined) {
    return 'Hello World!'
  }
  else {
    return `Hello ${name}`;
  }
}
  
const greeting = hello()
console.log(greeting)