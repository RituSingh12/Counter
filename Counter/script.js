let num=document.getElementById("num");
let increase=document.getElementById("increase");
let decrease=document.getElementById("decrease");

increase.addEventListener("click",function(){
    num.textContent=n-1;
    n++
})

let n=0
decrease.addEventListener("click",function(){
        num.textContent=n-1;
        n--
})
