/**
 * Sort table rows alphabetically based on the values in a column
 *
 * @param {Number} col column index (zero based)
 * @param {HTMLTableElement} table the table to be sorted
 */
function sortTableByColumn(col, table) {
  // TODO: Implement this function as instructed
  const tbody = table.querySelector('tbody');

  // Get all the rows from the tbody element and convert them to an array
  const rows = Array.from(tbody.querySelectorAll('tr'));

  // Sort the rows based on the values in the specified column
  rows.sort((a, b) => {
    const textA = a.cells[col].textContent.trim().toLowerCase();
    const textB = b.cells[col].textContent.trim().toLowerCase();
    return textA.localeCompare(textB);
  });

  // Append the sorted rows back to the tbody element
  rows.forEach((row) => {
    tbody.appendChild(row);
  });
}

/**
 * DO NOT EDIT THE CODE BELOW!
 *
 * The code below is there just to make it easier to test the code.
 *
 * If your function works correctly you should be able to sort the table
 * simply by clicking any column heading and the table should be immediately
 * sorted by values in that column.
 */

// find the table element
const table = document.getElementById('sortable');

// attach an event listener to each th element's click event
table.querySelectorAll('thead th').forEach((th, i) =>
  th.addEventListener('click', () => {
    sortTableByColumn(i, table);
  })
);