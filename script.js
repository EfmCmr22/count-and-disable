let nbre = 0;

let pushIdClick = document.getElementById("valeurId")

function pushId() {
    nbre += 1;
    pushIdClick.textContent = nbre;
}

let saveIdClick = document.getElementById("valSavId")

function saveId() {
    let nbreId = nbre + " - "
    saveIdClick.textContent += nbreId;
    pushIdClick.textContent = 0;
    nbre = 0; 
}

let resetIdClick = document.getElementById("resetId")

function resetId() {
    resetIdClick.textContent = " ";
}