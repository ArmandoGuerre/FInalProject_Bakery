var toggle=false;
document.body.querySelector(".menuIcon").addEventListener("click", function(){
    toggle=!toggle;

    if(toggle){
        document.body.querySelector(".menu").style.right="0";
    }else{
        document.body.querySelector(".menu").style.right="-150px";
    }
})
//Following Script is for the products page for opening and closing images/ buttons//

var modal = document.getElementById("myModal");
var modal01 = document.getElementById("myModal01");
var modal02 = document.getElementById("myModal02");
var modal03 = document.getElementById("myModal03");


var btn = document.getElementById("myBtn");
var btn01 = document.getElementById("myBtn01");
var btn02 = document.getElementById("myBtn02");
var btn03 = document.getElementById("myBtn03");


var span = document.getElementsByClassName("close")[0];
var span01 = document.getElementsByClassName("close01")[0];
var span02 = document.getElementsByClassName("close02")[0];
var span03 = document.getElementsByClassName("close03")[0];


btn.onclick = function() {
  modal.style.display = "block";
}
btn01.onclick = function() {
  modal01.style.display = "block";
}
btn02.onclick = function() {
  modal02.style.display = "block";
}
btn03.onclick = function() {
  modal03.style.display = "block";
}


span.onclick = function() {
  modal.style.display = "none";
}
span01.onclick = function() {
  modal01.style.display = "none";
}
span02.onclick = function() {
  modal02.style.display = "none";
}
span03.onclick = function() {
  modal03.style.display = "none";
}


window.addEventListener("click", function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
});
window.addEventListener("click", function(event01) {
  if (event01.target == modal01) {
    modal01.style.display = "none";
  }
});
window.addEventListener("click", function(event02) {
  if (event02.target == modal02) {
    modal02.style.display = "none";
  }
});
window.addEventListener("click", function(event03) {
  if (event03.target == modal03) {
    modal03.style.display = "none";
  }
});