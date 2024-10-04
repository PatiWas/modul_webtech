console.log(document.getElementById("element")
);

let n = 0;
console.log(n);

n = n + 1;
console.log(n);

// function buttonPressed() {
//     n=n+1;
//     document.getElementById("element").style.left = n + "px";
// }

function buttonPressed() {
    document.getElementById("element").style.borderColor = "red";
    document.body.style.backgroundColor = "blue";
}

function neuesElement() {
    let div = document.createElement("div");
    div.classList.add('random')
    document.body.appendChild(div);
}

function starteAnimation() {
    let element = document.getElementById("kreis2");
    element.style.animationPlayState = "running";
}

window.addEventListener("scroll", starteAnimation);