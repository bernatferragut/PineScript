
console.log("connected");

// GET API DATA
// let entry = document.querySelector("#main");
// let fearGreedUrl = "https://api.alternative.me/fng/?limit=10";

// let xhttp = new XMLHttpRequest();
// xhttp.onreadystatechange = function() {
//     if (this.readyState == 4 && this.status == 200) {
//        // Typical action to be performed when the document is ready:
//        console.log(xhttp.responseText);
//        entry.innerHTML = xhttp.responseText;
//     }
// };
// xhttp.open("GET", fearGreedUrl, true);
// xhttp.send();


// elements selection
const el = document.getElementById("rowList");
console.log(el);
// function creation on the window level
function run() {
    const data = document.createElement('p');
    data.textContent = 'DATA';
    el.appendChild(data);
    console.log(data);
}





