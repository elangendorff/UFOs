// import the data from data.js
const tableData = data;

// Reference the HTML table using d3 ("Data-Driven Documents" JavaScript library)
var tbody = d3.select("tbody"); // Selects the first element (of some HTML code that `d3` will point to) that matches the string "tbody".
                                // https://github.com/d3/d3-selection/blob/v3.0.0/README.md#select

function buildTable(data) {
    tbody.html("");                                 // Clear any existing data inside `tbody` (other than the `<tbody/> tags, themselves).
    data.forEach((dataRow) => {                     // For each `dataRow` in the `data` function parameter (not the `data.js` file)…
        let row = tbody.append("tr");               // Inside the `<tbody>` element (which should exist due to the definition of the `tbody` object),
                                                    // add (append) a table row (`<tr/>`) element, and assign it to `row`.
        Object.values(dataRow).forEach((val) => {   //      What is `Object`???
                                                    // For each `val` in the values of `dataRow` (i.e., for every element of `dataRow`),
            let cell = row.append("td");            // go inside the `row` object (which has table row `<tr/>` tags, see above),
                                                    // add (append) a table data (`<td/>`) tag,
                                                    // assign that table data element to `cell`,
            cell.text(val);                         // and put `val`'s text inside `cell` (i.e., inside the `<td/>` element).
        });
    });
}

function handleClick() {
    // Select the first element with a value that matches string "datetime"
    // (The HTML code that the function will be reading from with have tags with 'id="datetime"' in it.),
    // get the value of that element (`.property("value")`), and assign it to `date`.
    let date = d3.select("#datetime").property("value");
    
    let filteredData = tableData;
    
    // As long as `date` isn't empty…
    if (date) {
        // On each element (`row`) of `filteredData`,
        // check whether its `datetime` entry matches `date`.
        // Filter `filteredData` based on those that do,
        // and make the filtered object the new `filteredData`.
        filteredData = filteredData.filter(row => row.datetime === date);
    };
    
    buildTable(filteredData);
}

// The HTML code will have a `button` element with `id="filter-btn"`.
// (No other element should have this `id`; it should be unique.)
// When that button is clicked, call the `handleClick` function.
d3.selectAll("#filter-btn").on("click", handleClick);

// Build the `tableData` table when the page loads
buildTable(tableData);
