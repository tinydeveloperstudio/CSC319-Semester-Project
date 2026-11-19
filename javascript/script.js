const rankList = document.getElementById("rankingList");
function getRanking() {
    try {
        return JSON.parse(localStorage.getItem("rankingData"));
    }
    catch {
        return [];
    }
}

function dataRender() {
    if (!rankList) {
        return;
    }

    rankList.replaceChildren();
    
    getRanking().forEach(schoolName => {
        const item = document.createElement("li");
        item.append(document.createTextNode(schoolName));
        const removeButton = document.createElement("button");
        removeButton.type = "button";
        removeButton.classList.add("remove");
        removeButton.textContent = "Remove";
        removeButton.addEventListener("click", () => {
            rankingData.splice(index, 1);
            save();
            dataRender();
        });
        item.appendChild(removeButton);
        rankList.appendChild(item);
    });
}

function save(ranking) {
    localStorage.setItem("rankingData", JSON.stringify(ranking));
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
    if (!rankedCard || !schoolName) {
        return;
    }

    const ranking = getRanking();

    if(!ranking.includes(schoolName)) {
        rankingData.push(schoolName);
        save();
        dataRender();
    }
}

document.querySelectorAll(".rankButton").forEach(button => {
    button.addEventListener("click", rankButton);
});

dataRender();
