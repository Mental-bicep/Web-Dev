btn = document.getElementById("btn");
btn.addEventListener("click", fun);
function fun() {
    // console.log("hello again");
    h2 = document.getElementById("input");
    // console.log(h2);
    document.getElementById("userInput").innerHTML = h2.value;
    document.getElementById("input").value = "";
}
