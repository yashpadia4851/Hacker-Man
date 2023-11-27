let b = prompt("Enter your name")
let a = [
    "Initializing Hack Tool...",
    "Connecting to Facebook...",
    "Connecting to Serve1....",
    "Connecting Failed Retrying....",
    "Connecting to Server2....",
    "Connecting to Succesfully....",
    `Username is ${b}....`,
    `Trying to Crack ${b} Passward ....`,
    "200k passwords are tired....",
    "Match not found....",
    "566k passwords are tired....",
    "Match not found....",
    "985k passwords are tired....",
    "Match found....",
    `Accessing ${b} account`,
    "Hack Succesfully Done",
    `${b} Password is ********
    ${b} Number is 91**********
    ${b} Address = Dewas MP 
    Goodbye to Mr/Ms. ${b}......`
]
const sleep= async(seconds)=>{
   return new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(true)
    }, seconds * 1000);
   })
}
const hack= async(message)=>{
    await sleep(2)
    document.getElementById("text").innerText = message;
}
// This is a iife function----------------------->
(async()=>{
    for(let i=0; i<a.length; i++)
    await hack(a[i])
})()