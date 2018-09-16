// let $ = require('jquery'); // this ends up making webpack include node_modules/jquery/dist/jquery.js
// let Person = require('./modules/Person');
import Person from './modules/Person';

class Adult extends Person {
    
    payTaxes() {
        console.log(this.name + " now owes $0 in taxes");
    }
}


let john = new Person("John Doe", "blue");
let jane = new Adult("Jane Smith", "orange");

john.greet();
jane.greet();
jane.payTaxes();