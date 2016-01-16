
document.addEventListener("DOMContentLoaded", function() {
    var checkForm = function(e)
    {
      if(this.username.value == "") {
        alert("Error: Username cannot be blank!");
        this.username.focus();
        e.preventDefault(); // equivalent to return false
        return;
      }
    
      if(this.passWord.value != "" && this.passWord.value == "12345") {
        if(!checkPassword(this.passWord.value)) {
          alert("The password you have entered is not valid!");
          this.passWord.focus();
          e.preventDefault();
          return;
        }
      } else {
        alert("Error: Please check that you've entered and confirmed your password!");
        this.passWord.focus();
        e.preventDefault();
        return;
      }
      alert("Both username and password are VALID!");
    };

    var myForm = document.getElementById("myForm");
    myForm.addEventListener("submit", checkForm, true);


}, false);
$(document).keypress(function(event) { //pressing any key reveals objects hidden
    var s = String.fromCharCode(event.which);
    if (s.match(/[a-zA-Z\.]/)) document.getElementById("HI").innerHTML= "You pressed the letter = " + s
    if (s.match(/[0-9\.]/)) document.getElementById("HI").innerHTML= "You pressed the number = " + s
});
