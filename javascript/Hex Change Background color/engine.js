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
btn = document.getElementById("btn");
titleBox = document.getElementById("titleBox");
let n = Math.floor(Math.random() * (color.length - 1));
html = "<h1>HEX COLOR: #{color[n]}<h1>";
titleBox.innerHTML = html;
document.body.style.backgroundColor = color[n];

function fun() {
    let n = Math.floor(Math.random() * (color.length - 1));
    document.body.style.backgroundColor = color[n];
    // let str = col;
    html = `<h1>HEX COLOR: ${color[n].toUpperCase()}<h1>`;
    titleBox.innerHTML = html;
}
btn.addEventListener("click", fun);
