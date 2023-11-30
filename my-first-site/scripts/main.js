// const myHeading = document.querySelector("h1");
// myHeading.textContent = "Hello World!";

const myImage = document.querySelector("img");

myImage.onclick = () => {
    const mySrc = myImage.getAttribute("src");
    if (mySrc === "images/img1.jpg") {
        myImage.setAttribute("src", "images/img2.jpeg");
    } else {
        myImage.setAttribute("src", "images/img1.jpg");
    }
}

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
    const myName = prompt("Please enter your name.");
    if (!myName) {  /* If myName has no value, run setUserName() again from the start.*/
        setUserName();
    } else { /* If it does have a value , then store the value in localStorage and set it as the heading's text. */
        localStorage.setItem("name", myName);
        myHeading.textContent = `Mozilla is Cool, ${myName}`;
    }
}

if (!localStorage.getItem("name")) {
    setUserName();
} else {
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `Mozilla is cool, ${storedName}`;
}

myButton.onclick = () => {
    setUserName();
}