
//1. Start with the number 74 and set that equal to 'value'
var value = 74;
document.getElementById('p1').innerHTML = "The initial value of 'value' is " + value + ".";

//2. Create condition logic to check if the value is great or equal to 85
//2-1. If true, add 45 to 'value'
//2-2. If false, subtract 32 from 'value'
if(value >= 85){
	value =+ 45
}else{
	value -= 35
};
document.getElementById('p2').innerHTML = "After the if statement, the value of 'value' is " + value + ".";
//3. Create a string that is set to 45, add it to 'value'
value = value + "45";
document.getElementById('p3').innerHTML = "After concatenating 'value' with the string '45'" +
", the value of 'value' is " + value + ".";
//4. Create an array, loop through 'value' using charAt, set array[i] to each value
var array = [];
for (var i = 0 ; i < value.length; i++){
	array[i] = value.charAt(i);
}
document.getElementById('p4').innerHTML = "After creating a new array in which each index corresponds to a letter in 'value'" +
", the value of 'value' is " + value + " and the value of 'array' is " + array + ".";

//5. Remove the first and last values off the array
array.pop();
array.shift();
document.getElementById('p5').innerHTML = "After dropping the first and last objects in the array 'array'," +
"the value of 'value' is still" + value + " and the value of 'array' is " + array + ".";

//6. Create a new variable. Loop backwards through the array and store each value into the new Variable, combining each of the values of that array (backwards remember!)
var nuString = "";
for (i = array.length ; i > 0 ; i--){
	nuString += array[i-1];
}

document.getElementById('p6').innerHTML = "After creating a string that contains the values of array 'array' in reverse order" +
", the value of 'value' is " + value + " and the value of 'nuString' is " + nuString + ".";

//7. parseInt both the 'value' and the new variable created in Step 6, ensure that both 'value' and the new variable are set to these new parsed values;
value = parseInt(value);
nuString = parseInt(nuString);

//8. Add 'value' and the new variable created in Step 6 together and store them in 'value'
value += nuString;
document.getElementById('p6').innerHTML = "After setting the value of 'value' to the sum of the values of 'value' and 'nuString'," +
" the value of 'value' is " + value + " and the value of 'nuString' is " + nuString + ".";

//9. If the new value of 'value' is greater than 5245, set 'value' equal to 9. If not, check to see if it is equal to 4287, if it is, set 'value' equal to 8. 
//If neither of these are true, set the value to 7.
if (value > 5245) {
	value = 9;
}else if (value == 4287) {
	value = 8;
}else{
	value = 7;
}
document.getElementById('p7').innerHTML = "After checking the value of 'value' against the second set of if-else instructions and executing code accordingly," +
" the value of 'value' is " + value + ".";

//10. Create a while loop that counts down from 13 and increments 'value' by 1.
i = 13;
while (i >= 0) {
	value++;
	i --;
}
document.getElementById('p8').innerHTML = "After applying a while loop that incremented 'value' for each digit between 13 and 0 (inclusive)," +
" the value of 'value' is " + value + ".";
//11. Create a function that accepts an argument 'val'. The function should convert 'val' to a String, then drop the first character off the String, but only if there 
//is more than 1 character in the String. Return 'val' and set the 'value' to the returned value.
//12. Call the function.
console.log(value);
function nuFunction(val) {
	val = val.toString();
	if(val.length > 1) {
		val = val.slice(1);
	}
	return val;
}

value = nuFunction(value);
document.getElementById('p9').innerHTML = "After running this function with an if statement in it that I don't feel like describing in detail at 10pm," +
" the value of 'value' is " + value + ".";
//13. Console log value. Create an index.html file, link the this Javascript file. Load in the browser, check the value.
//14. Your answer should be a String value that equals 1. Is that what you got?
console.log(value);


