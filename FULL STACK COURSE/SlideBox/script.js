let color = document.querySelector(".box")


function moveFunction(){
  var randomColor = Math.floor(Math.random()*16777215).toString(16);
  color.style.backgroundColor ="#" + randomColor;
  
  
}

color.onclick = moveFunction;



const box = document.querySelector(".box");
const button = document.querySelector(".box");

let clicks = 0;
button.addEventListener("click", e => {
    if (clicks % 2 == 0) {
        box.classList.remove("transition-box-left");
        box.classList.add("transition-box-right");
        clicks++;
    } else {
        box.classList.remove("transition-box-right");
        box.classList.add("transition-box-left");
        clicks++;
    }
});
