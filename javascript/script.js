function cardStart() {
    var cards = document.getElementsByClassName("card");
    for (var i = 0; i < 20; i++) {
        cards[i].style.display = "none";
    }
}

function toggleCard(parameter) {
    var toggleCard = document.getElementById(parameter);
    if (toggleCard.style.display === "none") {
            toggleCard.style.display = "block";
    }
    else {
            toggleCard.style.display = "none";
    }
}
