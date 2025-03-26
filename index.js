"use strict";
let input = document.querySelector("input");
let otpreq = document.querySelector(".btn-otp");
let otpval = document.querySelector(".btn-val");

otpreq.addEventListener("click", (e)=>{
    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function(){
        if(this.readyState == 4 & this.status == 200){
            xhr.responseText;
            console.log(this.responseText);
        }
    }
    xhr.open("GET", "index.json", "true");
    xhr.send();
    // Notification.requestPermission().then((perm) =>{
    //     new Notification("ChatiMax Client Support!", {
    //         body:`OTP CODE: `,
    //         icon:"pic.jfif"
    //     })
    // })
})