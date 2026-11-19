const rankList = document.getElementById("rankingList");

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

function rankButton (event) {
    const rankedCard = event.currentTarget.closest(".card");
    const schoolName = rankedCard.querySelector("h3").textContent.trim() + " ";
    const item = document.createElement("li");
    item.append(document.createTextNode(schoolName));
    const removeButton = document.createElement("button");
    removeButton.type = "button";
    removeButton.classList.add("remove");
    removeButton.textContent = "Remove";
    removeButton.addEventListener("click", removeSchoolFromList);
    item.appendChild(removeButton);
    rankList.appendChild(item);
};

document.querySelectorAll(".rankButton").forEach(button => {
    button.addEventListener("click", rankButton);
});

function removeSchoolFromList (event) {
    const button = event.currentTarget.closest("button.remove");
    if (!button || !rankList.contains(button)) return;
    button.closest("li").remove();
};