
const tableData = data;  // import the data from data.js

var tbody = d3.select("tbody");  // Reference the HTML table using d3

function buildTable(data) {
    tbody.html("");  // clear out any existing data.           
    data.forEach((dataRow) => {
      let row = tbody.append("tr");   

      Object.values(dataRow).forEach((val) => {
        let cell = row.append("td");     // each value as a table cell (td)
        cell.text(val);  //we are extracting only the text of the value. Holds only each value from the object.
        }
      );
    });
  }
  
              // import the data from data.js
  //const tableData = data;             
              // Reference the HTML table using d3
// var tbody = d3.select("tbody");

// function buildTable(data) {
//             // clear out any existing data.  
//             // tbody.html references the table, pointing JavaScript directly to the table in the HTML page we're going to build.
//             // The parentheses with empty quotes (("");) is an empty string. The entire line tells JavaScript to use an empty string when creating the table; in other words, create a blank canvas. This is a standard way to clear data.        
//     tbody.html("");
  
//            // Next, loop through each object in the data
//            // data: an object that references the data being imported
//            // forEach: the keywords to create a for loop in JavaScript
//            // dataRow: a parameter that will be used as a value when the fun
//     data.forEach((dataRow) => {
//           // Append a row to the table body // and append a row and cells for each value in the row
//       let row = tbody.append("tr");      // This row tells JS to find the <tbody> tag within the HTML and add a table row ("tr")
  
//           // Loop through each field in the dataRow and add

//           // Object.values: tells JS to reference one object from the array
//           // dataRow: the values will go into the dataRow
//           // forEach(val): specifies that we want one object per row
//           // val: represents each item in the object
//       Object.values(dataRow).forEach((val) => {
//         let cell = row.append("td");     // each value as a table cell (td)
//         cell.text(val);  //we are extracting only the text of the value. Holds only each value from the object.
//         }
//       );
//     });
//   }

  function handleClick() {
      // Grab the datetime value from the filter
      // d3.select(): selects the very first element that matches the selector string, "#datetime"
      // d3.select("#datetime"): tells D3 to "look for" the #datetime id in the HTML tags
      // .property("value"): tells D3 to "grab" the info and hold it in the "date" variable
    let date = d3.select("#datetime").property("value");  // HTML specific 


    let filteredData = tableData;  // data.js specific -  remember we imorted data.js (tableData) first thing in this file !!! 
  
     // Check to see if a date was entered and filter the data using that date.
    if (date) {           // will take date entered in "let date"
           filteredData = filteredData.filter(row => row.datetime === date);  // Apply `filter` to the table data to only keep the rows where the `datetime` value matches the filter value
    }     
    buildTable(filteredData);  // rebuilds the table using filterd data // @NOTE: If no date was entered, then filteredData will just be the original tableData.
  }
  
   // Attach an event to listen for the form button
    //(1) We'll assign a unique id to a button element in the HTML called "filter-btn".
    //(2) .on("click", handleClick);, we're telling D3 to execute our handleClick()
    //(3) so when filter-btn is clicked it will execute  handleClick() function 
  d3.selectAll("#filter-btn").on("click", handleClick);
  buildTable(tableData);


  // Note :  // A triple equal sign (===) is checking for strict equality. This means that the type and value have to match perfectly.