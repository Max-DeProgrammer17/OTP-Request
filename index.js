"use strict";
let input = document.querySelector("input");
let otpreq = document.querySelector(".btn-otp");
let otpval = document.querySelector(".btn-val");

otpreq.addEventListener("click", (e)=>{
    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function(){
        if(this.readyState == 4 & this.status == 200){
            let jsOb = JSON.parse(xhr.responseText);
            let randNum = Math.trunc(Math.random() * jsOb.length) + 1;
              let rand = jsOb[randNum].id; 
        
   
  Notification.requestPermission().then((perm) =>{
    
        new Notification("ChatiMax Client Support!", {
            body:`OTP CODE: ${rand}`,
            icon:"pic.jfif"
        })
    })
        }
    }
    
    xhr.open("GET", "index.json", "true");
    xhr.send();
  
})