// get parameter data from URL
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
//parsing by key-values
const receiver = urlParams.get("r");
const message = urlParams.get("m");
const sender = urlParams.get("s");

//getting DOM
let receiverData = document.querySelector(".receiverData");
let messageData = document.querySelector(".messageData");
let senderData = document.querySelector(".senderData");

receiverData.innerHTML = receiver;
messageData.innerHTML = message;
senderData.innerHTML = sender;

console.log(receiverData);
