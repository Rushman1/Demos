// Define the module
var tableModule = (function() {

    // Function to create a table row
    function createTableRow(data) {
      var row = $('<tr>');
      $.each(data, function(key, value) {
        row.append($('<td>').text(value));
      });
      return row;
    }
  
    // Function to create the table
    function createTable(data) {
      // Create the table element
      var table = $('<table>').addClass('table table-striped');
  
      // Create the table header row
      var headerRow = $('<tr>');
      $.each(data[0], function(key, value) {
        headerRow.append($('<th>').text(key));
      });
      table.append($('<thead>').append(headerRow));
  
      // Create the table body rows
      var body = $('<tbody>');
      $.each(data, function(index, item) {
        body.append(createTableRow(item));
      });
      table.append(body);
  
      return table;
    }
  
    // Return the module object
    return {
      createTable: createTable
    };
  
  })();
