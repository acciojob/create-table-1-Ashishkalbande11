function insert_Row() {


  var  table = document.getElementById("sampleTable");
            var row = table.insertRow(1); // Change index to 1 if you want it below headers
            var cell1 = row.insertCell(0);
            var cell2 = row.insertCell(1);
            cell1.innerHTML = "New Cell1";
            cell2.innerHTML = "New Cell2";
}