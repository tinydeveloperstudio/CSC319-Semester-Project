function toggleCard(parameter) {
    var toggleCard = document.getElementById(parameter);
    if (toggleCard.style.display === "none") {
            toggleCard.style.display = "block";
    }
    else {
            toggleCard.style.display = "none";
    }
}
