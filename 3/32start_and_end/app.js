let hello = "   Hello, World!  ";
let wsRegex = /((\S+\s*\S+)+)/; // Change this line
let result = hello.match(wsRegex)[0]; // Change this line
