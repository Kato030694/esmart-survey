// const { json } = require("body-parser");
// const { application } = require("express");

const contactForm = document.querySelector(".form_customer");
let tencty = document.getElementById("tencty");
let diachi = document.getElementById("diachi");
let tenkhachhang = document.getElementById("tenkhachhang");
let sodt = document.getElementById("sodt");
let email = document.getElementById("email");

contactForm.addEventListener("submit", (e) => {
  e.preventDefault();
  // console.log("LOG SUCCESS")
  let formData = {
    tencty: tencty.value,
    diachi: diachi.value,
    tenkhachhang: tenkhachhang.value,
    sodt: sodt.value,
    email: email.value,
  };
  // console.log(formData)
  let xhr = new XMLHttpRequest();
  xhr.open('POST', '/');
  xhr.setRequestHeader("content-type", "application/json");
  xhr.onload = function () {
    console.log(xhr.responseText);
    if (xhr.responseText == "success") {
      alert("Email sent");
      tencty.value = "";
      diachi.value = "";
      tenkhachhang.value = "";
      sodt.value = "";
      email.value = "";
    } else {
      alert("Something went wrong!");
    }
  };
  xhr.send(JSON.stringify(formData));
});
