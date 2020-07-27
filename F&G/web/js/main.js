
console.log("connected");

// elements selection
const el = document.getElementById("rowList");
// function creation on the window level

function getData() {

    // GET API DATA // limit=10, format=json, date=world ( dd/mm//yy )
    let fearGreedUrl = "https://api.alternative.me/fng/?limit=10&format=json&date_format=world";
    let fearGreedData;

    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            fearGreedData = JSON.parse(xhttp.responseText);
            console.log(fearGreedData);
            renderHTML(fearGreedData);
        }
    };
    xhttp.open("GET", fearGreedUrl, true);
    xhttp.send();
    //
}

function renderHTML(fearGreedData) {
    // BTC
    let htmlString =
    `
    <div class="flex-item">Name: ${fearGreedData.name}</div>
    <div class="flex-item">Value: ${fearGreedData.data[0].value}</div>
    <div class="flex-item">Value classification: ${fearGreedData.data[0].value_classification}</div>
    <div class="flex-item">timestamp: ${fearGreedData.data[0].timestamp}</div>
    <div class="flex-item">time_until_update: ${fearGreedData.data[0].time_until_update}</div>
    `
    el.insertAdjacentHTML('beforeend', htmlString);
}