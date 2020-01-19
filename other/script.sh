#!/bin/bash
#
#  Filename: script.sh
#  bash script to count the number 
#  of special characters in a file
#  and print it to another file
#  "out.txt" in same directory
#
#  Usage: ./script.sh <filename>
if [ $# -eq 0 ]
then
	echo Use $0 \<filename\>
	exit 1;
fi
if [ ! -f $1 ]
then
	echo File $1 not found!
	exit 2;
fi
# initialise count to 0
let count=0
while read -r -n1 c
do
	[ "$c" == "." ] && ((count++))
	[ "$c" == "," ] && ((count++))
	[ "$c" == "?" ] && ((count++))
	[ "$c" == "!" ] && ((count++))
done < "$1"
echo The number of special characters in $1 is $count > out.txt 
#End of script
