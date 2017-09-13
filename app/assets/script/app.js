var $ = require('jquery');

var Person = require('./modules/Person');

var John = new Person('John Doe','blue');
var Jane = new Person('Jane Smith','green');


John.greet();
Jane.greet();


// $('h1').remove();