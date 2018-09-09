let Person = require('./modules/Person');

let john = new Person("John Doe", "blue");
let jane = new Person("Jane Smith", "green");

john.greet();
jane.greet();