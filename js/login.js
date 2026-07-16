// ===========================
// LOGIN ADMIN
// ===========================

document

.getElementById("loginForm")

.addEventListener("submit",function(e){

e.preventDefault();

let password=

document.getElementById("password").value;

if(password=="051225"){

localStorage.setItem(

"adminLogin",

true

);

window.location="admin.html";

}else{

alert("Password salah!");

}

});