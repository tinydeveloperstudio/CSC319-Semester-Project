const rankList = document.getElementById("rankingList");
var rankingData = JSON.parse(sessionStorage.getItem("rankingData" || "[]"));

function dataRender() {
    if (!rankList) {
        return;
    }

    rankList.replaceChildren();
    
    rankingData.forEach((schoolName, index) => {
        const item = document.createElement("li");
        item.append(document.createTextNode(schoolName));
        const removeButton = document.createElement("button");
        removeButton.type = "button";
        removeButton.classList.add("remove");
        removeButton.textContent = "Remove";
        removeButton.addEventListener("click", () => {
            rankingData.splice(index, 1);
            save();
        });
        item.appendChild(removeButton);
        rankList.appendChild(item);
    });
}

function save() {
    sessionStorage.setItem("rankingData", JSON.stringify(rankingData));
    dataRender();
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
    rankingData.push(schoolName);
    save();
}

document.querySelectorAll(".rankButton").forEach(button => {
    button.addEventListener("click", rankButton);
});

dataRender();
