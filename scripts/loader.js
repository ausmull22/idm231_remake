let loader = document.getElementById("js-preloader");

window.addEventListener("load", function() {
    loader.style.filter ="blur(10px)";
    loader.style.opacity ="0";
})

$(function(){
    $("#footer").load("/footer.html"); 
    $("#js-preloader").load("/loader.html"); 
  });