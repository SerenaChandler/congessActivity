var searchInput = $("#exampleInputEmail1")
var format = $(".btn")

https://www.loc.gov/


var getURL = function (search) {
    var apiUrl = "https://www.loc.gov/search/?q=" + search + "&fo=json";
} 


fetch(apiUrl).then(function (response) {
    if (response.ok) {
        console.log(response)
        response.json().then(function (data) {
            showPage(data, search);
        });
    }
    });