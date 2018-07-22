var square = x => x*x;
console.log(square(3));

var user = {
	name: 'Avinash',
	sayHi: () => {
		console.log(arguments);
		console.log(`Hi i am ${this.name}`);
	},
	sayHiAlt (){
		console.log(arguments);
		console.log(`Hi i am ${this.name}`);
	}
};
// using arrow functions
user.sayHi(1,2,3);
//normal syntax
user.sayHiAlt(1,2,3);