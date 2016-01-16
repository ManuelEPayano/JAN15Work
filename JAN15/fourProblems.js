//Manuel Payano
//Jan 15 2016
//Complete four of the following problems:
//Create a script with two variables assigned to two numbers. 

//runs all scripts when a key is pressed
$(document).keypress(function(event){ 
	//problem 1
	addTwo(5,8); 
	addTwo("Your ", "house"); 
	//problem 3
	var x = prompt("please enter a number")
	lessThan(x,10); 
	//problem 4
	x = prompt("please enter a number") 
	lessThan(x,10); 
	// additional problem 1
	door(); 
	door();
	door();
	
})
//Add them together and output the result to the console. 
//Now do the same with two strings.
function addTwo(a, b){ console.log(a+b); }
function lessThan(a,b){
	if (a < b ) console.log(a +" is less than "+b);
	else console.log(a +" is larger or equal than "+ b);
}
//Write a script that checks if a variable is less than 10. 
//If it is, alert the user that their variable is less than 10.
//If it is not, using the console, let the user know that 
//what the variable was and that it was greater than 10.
function lessThan(a,b){
	if (a < b ) console.log(a +" is less than "+b);
	else console.log(a +" is larger or equal than "+ b);
}
//Declare a function that depending upon which virtual 'door' 
//was entered tells the user they've received a different 
//'prize' in an alert. After declaring the function, try 
//running it with different options.
function door(){
	var a = prompt("please enter a door number")
	if (a == 3 ) console.log(a +" is right answer you won the prize");
	else console.log(a +" is the wrong one");
}
