cnt = document.getElementById("numberCnt");
box = document.getElementById("number");
inc = () => {
    num = parseInt(cnt.innerText);
    // console.log(num);
    num = num + 1;
    cnt.innerHTML = num;
    if (num > 0) cnt.style.color = "green";
    else if (num < 0) cnt.style.color = "red";
};

dec = () => {
    num = parseInt(cnt.innerText);
    // console.log(num);
    num = num - 1;
    cnt.innerHTML = num;
    if (num > 0) cnt.style.color = "green";
    else if (num < 0) cnt.style.color = "red";
};
btn2 = document.getElementById("btn2");
btn2.addEventListener("click", inc);
btn1 = document.getElementById("btn1");
btn1.addEventListener("click", dec);
