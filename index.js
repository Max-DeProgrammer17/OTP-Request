"use strict";
let input = document.querySelector("input");
let otpreq = document.querySelector(".btn-otp");
let otpval = document.querySelector(".btn-val");
let rand;

otpreq.addEventListener("click", (e)=>{
    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function(){
        if(this.readyState == 4 & this.status == 200){
            let jsOb = JSON.parse(xhr.responseText);
            let randNum = Math.trunc(Math.random() * jsOb.length);
              rand = jsOb[randNum].id; 
        
   
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

otpval.addEventListener("click", (e) => {
    let inputval = input.value;
    if(inputval === undefined){
        alert("Request An OTP");
        input.focus();
    }

    if(inputval === String(rand)){
        alert("OTP Verified Successfully!");
        rand = undefined;
    }else{
        alert("Incorrect OTP try again..");
        input.focus();
        input.value = "";
    }
})
