var modalWindow = document.getElementById('modal-container');

function showModal() {
    x = document.getElementById("numberX");
    y = document.getElementById("numberY");
    if(!numberValidate(x.value, x.id) || !numberValidate(y.value, y.id)) {
        numberValidate(y.value, y.id);
        return;
    }

    modalWindow.style.display = "block";
    generateTable();
}
function closeModal() {
    modalWindow.style.display = "none";
}
window.onclick = function(event) {
    if(event.target == modalWindow) {
        modalWindow.style.display = "none";
    }
}

function foo(x, y) {
    return x*y;
}

function generateTable () {
    if(document.getElementsByTagName("table").length == 1){
        document.getElementsByTagName("table")[0].remove();
    }

    var x = document.getElementById("numberX").value;
    var y = document.getElementById("numberY").value;


    var table = document.createElement("table");
    table.classList.add("table");

    for(let i = 0; i <= x; i++){
        let row = document.createElement("tr");
    
        if(i == 0){
            //Vytvorenie prveho riadka
            let cellH = document.createElement("th");
            let cellText = document.createTextNode("#");
            cellH.appendChild(cellText);
            row.appendChild(cellH);
            for(let j = 1; j <= y; j++){
                let cellH = document.createElement("th");
                let cellText = document.createTextNode("Y = " + j);
                cellH.appendChild(cellText);
                row.appendChild(cellH);
            }
            table.appendChild(row);
            continue;
        }
        //Vytvorenie zvysku tabluky, prve je th s hodnotou x
        let cellH = document.createElement("th");
        let cellText = document.createTextNode("X = " + i);
        cellH.appendChild(cellText);
        row.appendChild(cellH)

        for(let j = 1; j <= y; j++){
            let cell = document.createElement("td");
            let cellText = document.createTextNode(foo(i,j));
            cell.appendChild(cellText);
            row.appendChild(cell);
        }
        table.appendChild(row);
    }

    document.getElementById("table-container").appendChild(table);
}


function numberValidate (n, id) {
    let element = document.getElementById(id).nextSibling.nextSibling;

    if(n < 1 || n > 9 || n == "") {
        element.className -= " closed";
        return 0;
    }
    else {
        element.className += " closed";
        return 1;
    }
}


