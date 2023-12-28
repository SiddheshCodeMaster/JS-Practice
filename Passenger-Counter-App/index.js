// document.getElementById("count-el").innerText = 5;

let countEl = document.getElementById("count-el");

let count = 0;

let saveEl = document.getElementById("save-el");

// console.log(count);

function increment() {
    count += 1;
    countEl.textContent = count;
    console.log(count);
}

function save() {
    count = parseInt(countEl.innerText);
    let countStr =  " " + count + " - ";
    saveEl.textContent += countStr;
}

function perBatch() {

}