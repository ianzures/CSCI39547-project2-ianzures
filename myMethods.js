function square(x){
	return x * x;
}

Array.prototype.myEach = function(callback, index = 0){
	for(let i = index; i < this.length; i++){
		callback(this[i]);
	}
}

Array.prototype.myMap = function(callback){
	let mappedArray = [];
	for(let i = 0; i < this.length;i++){
		let num = callback(this[i]);
		mappedArray.push(num);
	}
	return mappedArray;
}

Array.prototype.myFilter = function(condition){
	let filtered = [];
	for(let i = 0; i < this.length; i++){
		if(condition(this[i])){
			filtered.push(this[i]);
		}
	}

	return filtered;
}

Array.prototype.mySome = function(callback){
	for(let i = 0; i < this.length; i++){
		if(callback(this[i])){
			return true;
		}
	}
	return false;
}

Array.prototype.myEvery = function(callback){
	for(let i = 0; i < this.length; i++){
		if(!callback(this[i])){
			return false;
		}
	}
	return true;
}

Array.prototype.myIncludes = function(target,fromIn = 0){
	while(fromIn < this.length){
		if(this[fromIn] === target){
			return true;
		}
		fromIn++;
	}
	return false;
}

Array.prototype.myIndexOf = function(target, fromIn = 0){
	for(let i = fromIn; i < this.length; i++){
		if(this[i] === target){
			return i;
		}
	}
	return -1;
}

Array.prototype.myPush = function(element, ... els){
	for(let i = 0; i < arguments.length; i++){
		this[this.length+i] = arguments[i];
	}
	return this.length;
}

Array.prototype.myLastIndexOf = function(target, fromIn = this.length){
	for(let i = fromIn; i >= 0; i--){
		if(this[i] === target){
			return i;
		}
	}
	return -1;
}

Array.prototype.myReduce = function(callback){
	var k; 
	for(let i = 0; i < this.length; i++){
		k += callback[this[i]];
	}
	return k;
}

function testMyMethod(){
	let testArray = [0,1,2,3,4,5]

	/*******************TEST MYEACH()*********************
	testArray.myEach(function(x){
			alert(square(x));
	});*/

	/*******************TEST MYMAP()**********************
	let mappedArray = testArray.myMap(function(x){
		return x * 2;
	});

	alert(mappedArray.toString());*/
	
	/*******************TEST MYFILTER()******************
	let filtered = testArray.myFilter(num => num % 2 === 0);
	alert(filtered.toString());	*/

	/*******************TEST MYSOME()********************
	if(testArray.mySome(num => num === 6)){
		alert("True");	
	}
	else{
		alert("False");
	}*/
	
	/*******************TEST MYEVERY()********************
	if(testArray.myEvery(num => num % 2 === 0)){
		alert("True");	
	}
	else{
		alert("False");
	}*/

	/*******************TEST MYINCLUDES()****************
	if(testArray.myIncludes(9)){
		alert("True");
	}
	else{
		alert("False");
	}*/

	/*******************TEST MYINDEXOF()****************
	alert(testArray.myIndexOf(6));*/

	/*******************TEST MYPUSH()*******************
	alert(testArray.toString());
	testArray.myPush(6);
	alert(testArray.toString());*/	

	/*******************TEST MYLASTINDEXOF()****************
	testArray.myPush(6);
	testArray.myPush(6);
	testArray.myPush(7);
	alert(testArray.myLastIndexOf(6));*/

	/*******************TEST MYREDUCE()****************
	alert(testArray.myReduce(( accumulator, currentValue ) => accumulator + currentValue));*/
 }





/*

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