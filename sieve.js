/*
	Sieve of Eratosthenes

	Given an input number, program lists all prime numbers below
	the number.

	Language: JavaScript
	Usage: node sieve.js <input_num>

*/
"use strict"
var num = +process.argv[2]; 
var arr = [
{	"val" : 0,
	"marked" : true
},
{
	"val" : 1,
	"marked" : true
}
];

for(var i=2;i<=num;i++) {
	arr.push({
		"val" : i,
		"marked" : false
	});
}

var dontStop = true;
var p = 2;
var i = 0;

while( dontStop ) {
	i = 2*p;
	while( i < arr.length ) {
		arr[i].marked = true;
		//console.log(arr[i]);
		i += p;
	}
	for(var k = p+1; k < arr.length; k++){
		if( k == arr.length - 1){
			if( arr[k].marked ){
				dontStop = false;
			}
		}
		if( arr[k].marked == false ){
			p = k;
			break;
		}
	}
}

var resultString = "";

for(var j=0;j<arr.length;j++){
	if(arr[j].marked == false) { 
		resultString = resultString + (arr[j].val).toString() + " ";
 	}
}
console.log(resultString);
