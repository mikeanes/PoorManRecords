//Array to store the products, start with empty data
var records = [];

function add()
{
    //Obtain the data from the inputs

    var name = document.getElementById("name").value;
    var artist = document.getElementById("artist").value;
    var barcode = document.getElementById("barcode").value;
    var price = document.getElementById("price").value;
    var cover = document.getElementById("cover").value;

    //Save this inside of the array
    //Must be in JSON syntax
    records.push({
        "name":name,
        "artist":artist,
        "barcode":barcode,
        "price":price,
        "cover":cover
    });


    //List the array data at the table
    list();


    //Clean the inputs
    cancel();
}

//Function to list the products
function list(){
    //Get the table
    var table = document.getElementById("table");


    //clean the table FOR LATER
    table.innerHTML="";

    //Loop to have all the repetitions
    for (var index = 0; index < records.length; index++){
        //Table Row
        var row = table.insertRow(-1); // -1 means to add a new LINE below the previous

        //Table Columns
        var column1 = row.insertCell(0);
        var column2 = row.insertCell(1);
        var column3 = row.insertCell(2);
        var column4 = row.insertCell(3);
        var column5 = row.insertCell(4);
        var column6 = row.insertCell(5);

        //Put the content on the columns
        column1.innerHTML = records[index].name;
        column2.innerHTML = records[index].artist;
        column3.innerHTML = records[index].price;
        column4.innerHTML = records[index].barcode;
        column5.innerHTML = "<div class='ellipsis'>" + records[index].cover + "</div>";
        column6.innerHTML = "<button class='btn btn-success' onclick='slectionar("+index+")'> Select </button>";

    }
}

function remover() {
    records.splice(selectedRow, 1);
    list();

    cancel();
}



//Function to Clean the inputs (textboxes) and focus the cursor on the Input Name
function cancel(){
    //Clean the inputs
    document.getElementById("name").value = "";
    document.getElementById("artist").value = ""
    document.getElementById("barcode").value = "";
    document.getElementById("price").value = "";
    document.getElementById("cover").value = "";
    
    //Focus on name input
    document.getElementById("name").focus();
    
    //Show only the blue button register
    document.getElementById("btnAdd").style.display = "inline-block";
    document.getElementById("btnEdit").style.display = "";
    document.getElementById("btnRemover").style.display = "";
    document.getElementById("btnCancel").style.display = "";
    
    }

 //Function to select the course(the line)
 function slectionar(row){

    //Fill back the inputs (textboxes)
    document.getElementById("id").value = row;
    document.getElementById("name").value = records[row].name;
    document.getElementById("artist").value = records[row].artist;
    document.getElementById("barcode").value = records[row].barcode;
    document.getElementById("price").value = records[row].price;
    document.getElementById("cover").value = records[row].cover;

    //Hide the Blue register button
    document.getElementById("btnAdd").style.display = "none";
    document.getElementById("btnEdit").style.display = "inline-block";
    document.getElementById("btnRemover").style.display = "inline-block";
    document.getElementById("btnCancel").style.display = "inline-block";

    selectedRow = row;

}

//Function to edit selected row in a table
function edit(selectedRow) {
    // Obtain the new values for the row from the input fields
    var name = document.getElementById("name").value;
    var artist = document.getElementById("artist").value;
    var barcode = document.getElementById("barcode").value;
    var price = document.getElementById("price").value;
    var cover = document.getElementById("cover").value;

    // Update the values in the products array
    records[selectedRow].name = name;
    records[selectedRow].artist = artist;
    records[selectedRow].barcode = barcode;
    records[selectedRow].price = price;
    records[selectedRow].cover = cover;

    // Relist the table to reflect the changes
    list();

    // Clean the inputs and hide the buttons
    cancel();
}

  document.addEventListener("DOMContentLoaded", function() {
    var table = document.getElementById("table");

    // Add placeholder row when table is empty
    if (table.rows.length === 0) {
      var placeholderRow = table.insertRow();
      for (var i = 0; i < 6; i++) {
        var cell = placeholderRow.insertCell();
        cell.innerHTML = "INSERT DATA";
      }
    }

    // Remove placeholder row when data is added to the table
    document.getElementById("btnAdd").addEventListener("click", function() {
      if (table.rows.length === 1 && table.rows[0].cells[0].innerHTML === "INSERT DATA") {
        table.deleteRow(0);
      }
    });
  });

 
  
  
  
