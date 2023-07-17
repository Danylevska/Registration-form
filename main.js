window.addEventListener("load", () => {

    $("#button").on( "click", function() {

   if (($("#firstName").val().length < 3) || ($("#lastName").val().length < 3)) {
    alert("The length of your name must be more then 3 word. Please, fill in this field correctly.")
   } else {

    if (($("#email").val().length < 6) || !($("#email").val().includes("@")) || !($("#email").val().includes("."))) {
    alert("Please, fill in your email correctly")
   } else {

   if (($("#password").val().length < 10) || !($("#password").val().match(/[0-9]/))) {
    alert("The length of your password can not be less then 10 symbols and must include numbers")
   } else {

 console.log($("#firstName").val());
 console.log($("#lastName").val());
 console.log($("#email").val());
 console.log($("#password").val());

alert("Thank you");
   }
   }
}
} );


    })

