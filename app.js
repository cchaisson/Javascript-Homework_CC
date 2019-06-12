// from data.js
//var tableData = data;

let tableData = data;

let tbody = d3.select("tbody");

// Call a function to create the table that will hold the data
function table(data) {
  tbody.html("");

  data.forEach((dataRow) => {
    let row = tbody.append("tr");
    Object.values(dataRow).forEach((v) => {
      let ufoInfo = row.append("td");
        ufoInfo.text(v);
      }
    );
  });
}

// Call a function to create a button for an on click event
function buttonClick() {

 d3.event.preventDefault();
  let date = d3.select("#datetime").property("value");
  let city = d3.select("#city").property("value");
  let state = d3.select("#state").property("value");
  let country = d3.select("#country").property("value");
  let shape = d3.select("#shape").property("value");
  let filteredData = tableData;
  if (date) {
    filteredData = filteredData.filter(row => row.datetime === date);
  }
  if (city) {
    filteredData = filteredData.filter(row => row.city === city);
  }
  if (state) {
    filteredData = filteredData.filter(row => row.state === state);
  }
  if (country) {
    filteredData = filteredData.filter(row => row.country === country);
  }
  else if (shape) {
    filteredData = filteredData.filter(row => row.shape === shape);
  }
  table(filteredData);
}
d3.selectAll("#filter-btn").on("click", buttonClick);
table(tableData);
