function show_random_number(){
	var random_number = Math.random(); // generate random number between 0 and 1
  	document.write(random_number);
 }

 const square = function(x) {
 	document.write(x*x);
	return x * x;
};

/*

function myEach(arg){
	for(var i = 0; i < arg.length(); i++){
	
	}
}

function myMap(arg){
}

function myFilter(arg){
}

function mySome(arg){
}

function myEvery(arg){
}

function myReduce(arg){
}

function myIncludes(arg){
}

function myIndexOf(arg){
}

function myPush(arg){
}

function myUnshift(arg){
}

function grabKeys(arg){
	A way of organizing data using key/value pairs.

const car = { make: “Toyota”, model: “Matrix”}

• Similar to arrays, you can access information using bracket
notation, only what is in the bracket is the key that you wish to
target.

car[‘make’] // “Toyota”
}

function grabValues(arg){
	You can also use “dot notation” to get data out of an
object.

const user = { firstName: “Lucille”, lastName: “Bluth”}

user.firstName // “Lucille”

Similar functionality exists for objects, using the key as a
variable name to access the value at that key, for
example:

const obj = {firstName: ‘Jon’, favColor: ‘blue’}

const {firstName, favColor} = obj

console.log(firstName,favColor) // ‘Jon’, ‘blue'
}

*/