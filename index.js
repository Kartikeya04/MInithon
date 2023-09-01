




$(".submit7").on("click",function(){
  $(".feed").addClass("feed-1");
})


$(window).on("load",function(){
  setTimeout( function(){

    $(".ViewB")
      .attr("visibility","hidden")
      .fadeIn()
      .fadeOut()
      .delay(500) 
      .slideUp()
      .slideDown();
      
  },2000)

  $("#invalidemail").attr("visibility","hidden");
})

// $(".submit7").on("click",function(){

$(".submit7").on("click",function(){
     $(".feed").addClass("feed-1");
   })

 $(".submit7").on("click",function(){
  validateEmail();
 })
 $(".submit7").on("click",function(){
  DoublevalidateEmail();
 })


function validateEmail() {
  const emailInput = document.getElementById("email");
  const emailError = document.getElementById("invalidemail");
  const email = emailInput.value;


  if (email.includes("@")) {
    emailError.style.display = "none";
    
  
  } else {

    $("#invalidemail").html("Please include an @ in email address. '"+email+"' is missing an '@'");
  
    emailError.style.display = "block";
    
  }
}


function DoublevalidateEmail(){
  const emailcheck= document.getElementById("email");
  const e2=emailcheck.value;
  const e3=document.getElementById("incompleteemail");
  if(e2.charAt(e2.length-1)==="@"){
    $("#incompleteemail").html("Please enter a part following '@' . '"+e2+"' is incomplete");
      
   e3.style.display="block";
  
  }
  else{
    
   e3.style.display="none";
      
  }
}
$(window).on("load",function(){
    $(".start").slideUp()
    .delay(2000)
    .slideDown()
})