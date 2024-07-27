function compute() {
    let ft = Number(document.getElementById("feet").value);
    let inches = 12 * ft;
    document.getElementById("result").innerText = inches;
  }

function onReady() {
    document.getElementById("compute").addEventListener("click",compute);
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', onReady);
} else {
    onReady();
}