//Manuel Payano
//Jan 15 2016
//Write 3 different functions that take input and return 
//something via the console or an alert.

function user(userName,passWord){ // this function creates an object
	this.userName = userName;
	this.passWord = passWord;
	this.say_userName =  function(){// this function returns the username
	 	return "the username is "  + this.userName;
	}
}

$(document).click(function(event) { //hides the clicked object
    $(event.target).hide();
    console.log(event.target.id);
    alert(event.target.id);
});

$(document).keypress(function(event) { //pressing any key reveals objects hidden
    $(document).show();
    $("body").show();
    $("div").show();
    console.log(event.which);

});