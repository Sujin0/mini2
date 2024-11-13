let decreas=document.getElementById("decrease");
let increase = document.getElementById("increase");
let reset = document.getElementById("reset")
let countnum= document.getElementById("count")
let count=0;

decreas.onclick=function(){
    count--;
    countnum.textContent=count;
}

reset.onclick=function(){
    count = 0;
    countnum.textContent=count;
}

increase.onclick=function(){
    count++;
    countnum.textContent=count;
}


