var manuIcon = document.querySelector(".manu-icon");
var sidebar = document.querySelector(".sidebar");
var container = document.querySelector(".container");

manuIcon.onclick = function(){
    sidebar.classList.toggle("small-sidebar")
    container.classList.toggle("large-container")
}
