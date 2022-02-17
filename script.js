
function testing() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }

function testinglottie(){
  document.getElementById("lottie").style.display="none";
  document.getElementById("cny").style.display="block";
}
setTimeout(testinglottie, 2000);
var dayClicked = true;
test123=0


function testingdaily(){
  if (dayClicked==false) {
    alert("You have claimed your points for today! Come back tomorrow");
}
else {
    test123 += 50;
    dayClicked = false;
    document.getElementById("test123").innerHTML="You have "+test123+ " coins"
    document.getElementById("daily").style.backgroundColor="gray";
    document.getElementById("daily").innerHTML="Claimed today"
}
setTimeout(function() {
    dayClicked = true;
    document.getElementById("daily").style.backgroundColor="background-color: #04aa6d;";
    document.getElementById("daily").innerHTML="Daily login bonus"
}, 86400000);
}
//document.getElementById("testing12345").innerHTML+=document.getElementById("chair").innerText
//function update(){

  //document.getElementById("chairtotal").innerHTML="$"+document.getElementById("chair").innerHTML*50+".00"

//}
//setInterval(update, 1000);