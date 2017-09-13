//var Person = require('./modules/Person');
import Person from './modules/Person';
var $ = require('jquery');

class Adult extends Person{
	payTaxes(){
		console.log(this.name+" now owes $0 in taxes.");
	}
}

var John = new Person('John','blue');
var Jane = new Adult('Jane','orange');

John.greet();
Jane.greet();
Jane.payTaxes();

$('h1').remove();