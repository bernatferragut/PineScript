
console.log("connected");

// GET API DATA
// Example URL: https://api.alternative.me/fng/
// Example URL: https://api.alternative.me/fng/?limit=10
// Example URL: https://api.alternative.me/fng/?limit=10&format=csv
// Example URL: https://api.alternative.me/fng/?limit=10&format=csv&date_format=us

let entry = document.querySelector("#main");

let fearGreedUrl = "https://api.alternative.me/fng/?limit=10";

let xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
       // Typical action to be performed when the document is ready:
       console.log(xhttp.responseText);
       entry.innerHTML = xhttp.responseText;
    }
};
xhttp.open("GET", fearGreedUrl, true);
xhttp.send();