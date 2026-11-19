const rankList = document.getElementById("rankingList");
function getRanking() {
    try {
        const rank = JSON.parse(localStorage.getItem("rankingData") ?? "[]");
        return Array.isArray(rank) ? rank.filter(name => typeof name === "string") : [];
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
    
    getRanking().forEach((schoolName, index) => {
        const item = document.createElement("li");
        item.append(document.createTextNode(schoolName));
        const removeButton = document.createElement("button");
        removeButton.type = "button";
        removeButton.classList.add("remove");
        removeButton.textContent = "Remove";
        removeButton.addEventListener("click", () => {
            const ranking = getRanking();
            ranking.splice(index, 1);
            save(ranking);
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
    const schoolName = rankedCard?.querySelector("h3")?.textContent.trim();
    if (!schoolName) {
        return;
    }

    const ranking = getRanking();

    if(!ranking.includes(schoolName)) {
        ranking.push(schoolName);
        save(ranking);
        dataRender();
    }
}

document.querySelectorAll(".rankButton").forEach(button => {
    button.addEventListener("click", rankButton);
});

dataRender();
