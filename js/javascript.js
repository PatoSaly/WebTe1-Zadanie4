function toggleModal (hidden) {
    document.getElementById('fade').style.display = hidden ? "none" : "block";
    document.getElementByClass('modal-container')[0].style.display = hidden ? "none" : "flex";
}

function generateTable () {
    var table = document.createElement("table");

    for(let i = 0; i < 5; i++){
        let row = document.createElement("tr");
        for(let j = 0; j < 10; j++){
            let col = document.createElement("td");
            row.appendChild(col);
            col.append((j+1) + ".");
        }
        table.appendChild(row);
    }

    document.getElementById("table-container").appendChild(table);
}

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("table-button").addEventListener("click", generateTable);

    document.getElementById("event-input").addEventListener("keyup", function(event) {
        console.log(event.target.value);
    })
});


