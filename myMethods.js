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

function testMyMethod(){

	/*TEST MYEACH()
	[1,2,3].myEach(function(x){
			alert(square(x));
	}, 1)
	*/

	/*TEST MYMAP()
	let k = [1,2,3].myMap(function(x){
		x * 2;
	});

	for(let i = 0; i < k.length; i++){
		alert(k[i]);
	}
	*/

	/*TEST MYFILTER()
	let arr = ["Trigo","Migo", "Shego"];
	let filt = arr.myFilter(word => word.length > 4);
	document.getElementById("demo").innerHTML = filt;
	*/

	/*TEST MYINCLUDES()
	let arr2 = [1,2,3,4,5]
	if(arr2.myIncludes(3)){
		document.getElementById("demo").innerHTML = "true";
	}
	*/
 }




/*





function myIncludes(target,fromIn = 0){
	while(fromIn < this.length){
		if(this[fromIn] === target){
			return true;
		}
		fromIn++;
	}
	return false;
}



function myEvery(arg){
}

function myReduce(arg){
}
*/


/*
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