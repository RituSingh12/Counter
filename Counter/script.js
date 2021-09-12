let num=document.getElementById("num");
let increase=document.getElementById("increase");
let decrease=document.getElementById("decrease");

let n=0

increase.addEventListener("click",function(){
    num.textContent=n-1;
    n++
})

decrease.addEventListener("click",function(){
        num.textContent=n-1;
        n--
})
