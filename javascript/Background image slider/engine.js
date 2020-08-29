right = document.getElementById("rightArrow");
left = document.getElementById("leftArrow");
outerBox = document.getElementById("outerBox");
let idx = 0;
let img = [
    "img/1.jpg",
    "img/2.jpg",
    "img/3.jpg",
    "img/4.jpg",
    "img/5.png",
    "img/6.jpg",
    "img/7.jpg",
    "img/8.jpg",
    "img/9.jpg",
    "img/10.png",
    "img/11.jpg",
    "img/12.jpg",
    "img/13.jpg",
    "img/14.jpg",
];
inc = () => {
    idx = (idx + 1) % img.length;
    console.log(idx);
    outerBox.style.backgroundImage = `url(${img[idx]})`;
    // outerBox.style.backgroundImage = "";
    // img/9.jpg
    // outerBox.style.backgroundColor = "red";
    // outerBox.backgroundImage = "img/YpA6SC.jpg";
    // outerBox.innerText = "working javascript";
    // console.log("done work");
};
dec = () => {
    idx = (idx - 1 + img.length) % img.length;
    outerBox.style.backgroundImage = `url(${img[idx]})`;
};
right.addEventListener("click", inc);
left.addEventListener("click", dec);
