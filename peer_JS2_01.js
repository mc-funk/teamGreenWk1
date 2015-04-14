/*
1. Start with the number 74 and set that equal to 'value'

2. Create condition logic to check if the value is great or equal to 85
2-1. If true, add 45 to 'value'
2-2. If false, subtract 32 from 'value'

3. Create a string that is set to 45, add it to 'value'

4. Create an array, loop through 'value' using charAt, set array[i] to each value

5. Remove the first and last values off the array

6. Create a new variable. Loop backwards through the array and store each value into the new Variable, combining each of the values of that array (backwards remember!)

7. parseInt both the 'value' and the new variable created in Step 6, ensure that both 'value' and the new variable are set to these new parsed values;
*/

var value = 74;
if(value >= 85){
	value =+ 45
}else{
	value -= 35
};
console.log(value);
value = value + "45";
console.log(value);
var array = [];
for (var i = 0 ; i < value.length; i++){
	array[i] = value.charAt(i);
}

array.pop();
array.shift();

console.log(array);

var nuString = "";
for (i = array.length ; i > 0 ; i--){
	nuString += array[i-1];
}

console.log(nuString);

value = parseInt(value);
nuString = parseInt(nuString);

value += nuString;

if (value > 5245) {
	value = 9;
}else if (value == 4287) {
	value = 8;
}else{
	value = 7;
}
i = 13;
while (i >= 0) {
	value++;
	i --;
}
console.log(value);
function nuFunction(val) {
	val = val.toString();
	if(val.length > 1) {
		val = val.slice(1);
	}
	return val;
}

value = nuFunction(value);

console.log(value);

/*
******* SWITCH PROGRAMMERS *******

8. Add 'value' and the new variable created in Step 6 together and store them in 'value'
1
9. If the new value of 'value' is greater than 5245, set 'value' equal to 9. If not, check to see if it is equal to 4287, if it is, set 'value' equal to 8. 
If neither of these are true, set the value to 7.

10. Create a while loop that counts down from 13 and increments 'value' by 1.

11. Create a function that accepts an argument 'val'. The function should convert 'val' to a String, then drop the first character off the String, but only if there 
is more than 1 character in the String. Return 'val' and set the 'value' to the returned value.

12. Call the function.

13. Console log value. Create an index.html file, link the this Javascript file. Load in the browser, check the value.

14. Your answer should be a String value that equals 1. Is that what you got?
*/
