// import the data from data.js
const tableData = data;

// Reference the HTML table using d3 (JavaScript library)
var tbody = d3.select("tbody"); // Selects the first element (of *what*?) that matches the string "tbody".
                                // https://github.com/d3/d3-selection/blob/v3.0.0/README.md#select

function buildTable(data) {
    tbody.html("");
    data.forEach((dataRow) => {                     // ??? Why are we using `data` and not `tableData`?
        let row = tbody.append("tr");               // Inside the `<tbody>` tag (due to the definition of the `tbody` object),
                                                    // add (append) a table row (`<tr>` tag).
        Object.values(dataRow).forEach((val) => {   // ??? What is `Object`???
                                                    // For each `val` in `Object.values(dataRow)`,
            let cell = row.append("td");            // go inside the `row` object (see above), and
                                                    // add (append) a table data (`<td>`) tag.
                                                    // Assign that tag to `cell`.
            cell.text(val);                         // ???
        });
    });
}