const boxx = document.getElementById("mybox");
   let colorss = ["red","blue","green","yellow","tomato","orange","white","black"];
function change(event){
    let indi = Math.floor(Math.random()*8);
    document.body.style.backgroundColor = colorss[indi];
    
};

boxx.addEventListener("click",change);