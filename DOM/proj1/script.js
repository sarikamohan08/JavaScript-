var counter=document.querySelector(".counter")
var followers=document.querySelector(".followers")

let count=1;

setInterval(() => {
    if(count<=999){
        count++;
        counter.innerText = count;
    }
},1);


setTimeout( () => {
    followers.innerText = "followers on instagram"
},5000)