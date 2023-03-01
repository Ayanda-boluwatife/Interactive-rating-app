var r;

var rate = document.getElementsByClassName("rate");
let thank = document.querySelector(".thank");
for( r = 0; r < rate.length; r++){
    rate[r].addEventListener("mouseover", (e)=>{
        var pThank =e.target.innerHTML;

        e.target.classList.toggle("active");
        // rate[r].classList.toggle("active")

        if(pThank > 3){
            thank.style.color = "green";
            thank.style.backgroundColor = "white"
            thank.innerHTML = "Thanks, you selected " + pThank + " out of 5";
        }else if(pThank <=2){
            thank.innerHTML = "So sad you selected " + pThank + " out of 5";
        }
        else{
            thank.innerHTML = "You selected " + pThank + " out of 5";
        }
    })
}
function submit(){
    var thanks = document.querySelector(".thankpage");
    var one = document.querySelector(".one");
    one.style.display ="none"
    thanks.style.display ="flex";
}