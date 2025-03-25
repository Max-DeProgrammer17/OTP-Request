"use strict";
let input = document.querySelector("input");
let otpreq = document.querySelector(".btn-otp");
let otpval = document.querySelector(".btn-val");

otpreq.addEventListener("click", (e)=>{
    Notification.requestPermission().then((perm) =>{
        new Notification("ChatiMax Client Support!", {
            body:"OTP CODE: ",
            icon:"pic.jfif"
        })
    })
})