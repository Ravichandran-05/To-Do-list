let tabledata = 0;
let n = 1;

function displayDetails(event) {
    event.preventDefault();
    var form = document.getElementById("form-inputs")
    var fname = document.getElementById("fname").value;;
    var regno = document.getElementById("regno").value;;
    var email = document.getElementById("email").value;;
    var table = document.getElementById("myrow");
    var row = table.insertRow(n);
    if (!fname || !regno || !email) {
        alert("Please fill all the boxes");
        return;
    }

    var cell1 = row.insertCell(0);
    cell1.innerHTML = fname;
    var cell2 = row.insertCell(1);
    cell2.innerHTML = regno;
    var cell3 = row.insertCell(2);
    cell3.innerHTML = email;
    var cell4 = row.insertCell(3);
    cell4.innerHTML = '<button id="table-btn" onClick="deleteRow(this)">X</button>';
    tableData++;
    n++;
    form.reset();

}

function deleteRow(r) {
    var i = r.parentNode.parentNode.rowIndex;
    document.getElementById("myrow").deleteRow(i);
}

function resett() {
    var fname = document.getElementById("fname").value = '';
    var regno = document.getElementById("regno").value = '';
    var email = document.getElementById("email").value = '';
}