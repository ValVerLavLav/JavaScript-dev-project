//JavaScript Exercises 2

//Exercise 1

//Now let's add content to an HTML document instead of writing to the console.
//Write a function called addBands(myBandList) that will list your favorite bands.
//Start with an empty HTML page that contains a level 1 heading "My Favorite Bands"
//and an empty unordered list with ID band-list.
//Your function should use the JavaScript DOM to create list items and add them
//to the unordered list, with one list item for each string in array myBandList.
//For example, if I call:
//  addBands(['Dire Straits', 'Kansas', 'Steely Dan']);
//The function will add three list items to the unordered list.

// document.getElementById("band-list");
// function addBands(myBandList) {
//     var myBandList = document.querySelector('#band-list');
//     band-list.innerHTML += '<p>New band name</p>';
// }

// addBands(['Van Halen', 'The Police', 'Eminem']);


//Exercise 2

//Write a function called addMultTable(rows, cols) that will create a multiplication
//table. Your function should use the JavaScript DOM to insert an HTML table after the heading.
//For example, if I call:
//addMultTable(4, 8);
//It will create an HTML table with 4 rows
//and 8 columns, and append it after the level 1 heading.

var rows = 0;
var cols = 0;
var myTable = (rows, cols);
function addMultTable(rows, cols) {
    var body = document.getElementsByTagName("body");
    var table = document.createElement("table");
    var tableBody = document.createElement("tbody");
    for (var i = 0; i < 2; i++) {
        var rows = document.createElement("tr");
        myTable.innerHTML += table.insertRow(rows-2);
    for (var j = 0; j < 2; j++) {
        var cell = document.createElement("td");
        var additionalColumn = cols-2;
        additionalColumn.appendChild(cell);
    }
    tableBody.appendChild(additionalColumn);
}
table.appendChild(tableBody);
body.appendChild(table);
}

// addMultTable(4, 8);