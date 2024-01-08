// event listener

function handle_click(element){
    alert("叫你按就按?")
    element.innerText = "按屁阿?";
    element.style.color = "red";
}

var img = document.getElementById("img");
img.addEventListener("mouseover", function(){
    this.src = "../picture/崩鐵.jpg";
})
img.addEventListener("mouseout", function(){
    this.src = "../picture/惠.jpg";
})

var s1 = document.getElementById("btn2");
s1.addEventListener("click", function(){
    alert("不是叫你不要按?按屁阿?");
    this.innerText = "叫你不要按，按屁阿!";
    this.style.color = "red";
})

