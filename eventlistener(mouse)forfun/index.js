const boxx = document.getElementById("mybox");
const boximg = document.getElementById("boximg");
   let colorss = ["red","blue","green","yellow","tomato","orange","white","black"];
function change(event){
    let indi = Math.floor(Math.random()*8);
    document.body.style.backgroundColor = colorss[indi];
    
};
function imgchange(event){
 boximg.src = "images.png";
};
function resettt(event){
boximg.src = "sad.png";
};

boxx.addEventListener("click",change);
boxx.addEventListener("mouseover",imgchange);
boxx.addEventListener("mouseout",resettt);