var email = document.getElementById("email");
var errorrMsg = document.getElementById("error-message");
var success = document.getElementById("submit-btn");
var form = document.getElementById("form");


success.addEventListener( "click", (e)=>{
e.preventDefault();
if(email.value === ""){
errorrMsg.innerText = " Valid email required";
email.style.borderColor = "red";
email.style.color = "red";
}else{
  errorrMsg.innerHTML = "";
  window.location.href = "success.html"
}
})
