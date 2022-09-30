
var today = new Date();
var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();



var dateTime = date+' '+time;


function currentTime() {
    let date = new Date(); 
    let hh = date.getHours();
    let mm = date.getMinutes();
    let ss = date.getSeconds();
    let session = "AM";
  
    if(hh == 0){
        hh = 12;
    }
    if(hh > 12){
        hh = hh - 12;
        session = "PM";
     }
  
     hh = (hh < 10) ? "0" + hh : hh;
     mm = (mm < 10) ? "0" + mm : mm;
     ss = (ss < 10) ? "0" + ss : ss;
      
     let time = hh + ":" + mm + " " + session;
  
    document.getElementById("clock").innerText = time; 
    


    let t = setTimeout(function(){ currentTime() }, 1000);
  }
  currentTime();

if(today.getHours()>16 || today.getHours()<06){
    console.log('Night',today.getHours())
    document.getElementById("sec-header").className += "night";
    document.getElementById("about").className += " anight";
    document.getElementById("contact").className += " cnight";
    document.getElementById("footer__text").innerText = "Good Night"; 

}
else{
    console.log('Day',today.getHours())
    document.getElementById("sec-header").className += "day";
    document.getElementById("about").className += " aday";
    document.getElementById("contact").className += " cday";
    document.getElementById("footer__text").innerText = "Have A Great Day"; 
}


