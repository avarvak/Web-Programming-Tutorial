"use strict";

function compute() {
    let F = Number(document.getElementById("F").value);
    let result = document.getElementById("result");
    let C = (F - 32) * 5/9;
    if (C <= 0) {
        result.classList.remove("boiling");
        result.classList.add("freezing");
    } else if (C >= 100) {
        result.classList.remove("freezing");
        result.classList.add("boiling");
    } else {
        result.classList.remove("freezing");
        result.classList.remove("boiling");
    }
    result.innerText = C;
}

function onReady() {
    document.getElementById("compute").addEventListener("click",compute);
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', onReady);
} else {
    onReady();
}