/*

Game Center
You and your friend go to a game arcade where you choose to play the lucky pick game. In the game, there is a square grid and on each block some money is placed on it. When a player chooses a block, the machine randomly chooses a block from the available neighbouring and the chosen block (consider 8 neighbourhood). The player is awarded the money that is placed on the block that the machine selects. Your friend needs help choosing the block.

Your job is to return the block position(s) that will maximize the minimum amount your friend will win for sure. If there are more than one such block positions then output must return all these positions.


Input Format
You will be given a function which contains single argument representing the Grid Description(in the form of string array) {N rows each containing N numbers separated by '#', each number representing the amount of money put on that block}

Output Format
You need to return the array of string containing the position(s) of a block choosing which will give the maximum amount of money which your friend will definitely win.


Sample Test Case 1
Sample Input
3
12#45#33
94#54#23
98#59#27

Sample Output
3#1

*/
//Read input from STDIN. print your output to STDOUT 
/*
* use stdin.readLine() to take input from STDIN and use print() to write output
*/

importPackage(java.io);
importPackage(java.lang);
var ist = new java.io.InputStreamReader(java.lang.System.in);
var stdin = new java.io.BufferedReader(ist);

var min;

function cost( val ) {
    //print(typeof val);
    if( val ) {
        if( val < min) {
            min = val;
        }
    }
}

function main(){
	// Write code here
	"use strict"
	
	var n = parseInt(stdin.readLine());
	var line;
	var array = [];
	var costArray = [];
	var currCost;
	var max = -1;
	
	for( let i = 1; i <= n; i++ ) {
	    line = String(stdin.readLine());
	    array.push(line.split("#"));
	}
	
	for( let i = 0; i < n; i++ ) {
	    line = [];
	    for( let j = 0; j < n; j++ ) {
	        
	        currCost = 0;
	        min = 9007199254740991;
	        
	        if( i > 0 ) {
    	        cost( array[i-1][j-1] );
    	        cost( array[i-1][j] );
    	        cost( array[i-1][j+1] );
	        }
	        
	        cost( array[i][j-1] );
	        cost( array[i][j] );
	        cost( array[i][j+1] );
	        
	        if( i < n-1 ) {
    	        cost( array[i+1][j-1] );
    	        cost( array[i+1][j] );
    	        cost( array[i+1][j+1] );
	        }
	        
	        currCost = min;
	        line.push(currCost);
	    }
	    costArray.push(line);
	}
	
	costArray.forEach( function(line) {
	    line.forEach( function(cost) {
	        if( max < cost ) {
	            max = cost;
	        }
	    });
	});
	
	for( let a = 0; a < n; a++ ) {
	    for( let b = 0; b < n; b++ ) {
	        
	        if( costArray[a][b] === max) {
	            print( (a+1) + "#" + (b+1) );
	        }
	    }
	}
	
}
main();
