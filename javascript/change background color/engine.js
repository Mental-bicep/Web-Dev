btn = document.getElementById("btn");
let color = [
    "#523906",
    "#535204",
    "#62760c",
    "#cdb30c",
    "#be5683",
    "#ffe4e4",
    "#900d0d",
    "#006a71",
    "#05dfd7",
    "#05dfd7",
    "#393e46",
];
let n = Math.floor(Math.random() * (color.length - 1));
document.body.style.backgroundColor = color[n];

// btn.style.backgroundColor=color[n];
change = function () {
    let n = Math.floor(Math.random() * (color.length - 1));
    // console.log("value of n is \n"+ n);
    document.body.style.backgroundColor = color[n];
    // btn.style.backgroundColor=color[n];
    // btn.style.borderColor='black';
};
btn.addEventListener("click", change);
