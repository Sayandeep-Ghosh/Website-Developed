var navlinks = document.getElementById("navlinks");

function show(){
  navlinks.style.right = "0px";
}
function hide(){
  navlinks.style.right = "-200px";
}


// auto images slider
var slideImg = document.getElementById("slideImg");
    var ford = new Array(
      "Mustang1.jpg",
      "Mustang2.jpg",
      "Mustang3.jpg",
      "Mustang4.jpg"
    );
    var len = ford.length;
    var i = 0;
    function slide(){
      if(i > len-1){
        i = 0;
      }
      slideImg.src = ford[i];
      i++;
      setTimeout("slide()", 3000);
    }