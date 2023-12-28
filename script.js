const Icon = document.querySelector(".icon")
const Theme = document.getElementById("theme")
const Container = document.querySelector(".container")


let theme = true;

const handleClick = ()=>{

    theme ?  Container.style.backgroundColor = "rgb(69, 69, 69)"  
          : Container.style.backgroundColor = "white";

    Icon.classList.toggle("click");
    Theme.classList.toggle("fa-moon-o");

    theme = !theme;

}