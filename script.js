
// ==========================================
// HAPPY'S VAULT
// ==========================================

// PACKS
const packs = {
    classic: {
        name: "Classic Pack",
        price: 20,
        odds: { Basic: 70, Mid: 25, Elite: 5 },
        values: { Basic: 15, Mid: 20, Elite: 40 }
    },
    neon: {
        name: "Neon Pack",
        price: 50,
        odds: { Basic: 55, Mid: 35, Elite: 10 },
        values: { Basic: 20, Mid: 35, Elite: 80 }
    },
    galaxy: {
        name: "Galaxy Pack",
        price: 150,
        odds: { Basic: 35, Mid: 45, Elite: 20 },
        values: { Basic: 35, Mid: 60, Elite: 200 }
    }
};

// PACK AVAILABILITY
const packUnlocked = {
    classic: true,
    neon: false,
    galaxy: false
};

// ==========================================
// BASIC POKEMON CARDS
// ==========================================

const pokemonCards = [
    {
        name: "Clive",
        number: "150/129",
        image: "https://img.simplifiedtcg.com/cards/zh/14807.webp"
    },
    {
        name: "Tatsugiri ex",
        number: "229/208",
        image: "https://cdn.shopify.com/s/files/1/0919/6650/5335/files/CSV9C-Stellar-Crystal-Simplified-Chinese-Pokemon-Set-List-Card-Armoury-UK-229.webp?v=1790967873"
    },
    {
        name: "Dondozo ex",
        number: "235/222",
        image: "https://static.tcgcollector.com/content/images/ec/11/33/ec11334a99f780c5cb7492c84aed08ad2dcbe2da6404cd4392fe3cfc07eab4ae.webp"
    },
    {
        name: "Dancer",
        number: "152/132",
        image: "https://i.ebayimg.com/images/g/-6wAAOSw1vVmHjFD/s-l1200.jpg"
    },
    {
        name: "Luxray",
        number: "069/066",
        image: "https://i.ebayimg.com/images/g/DfoAAOSwLpZmz7Au/s-l1200.png"
    },
    {
        name: "Oranguru",
        number: "008/008",
        image: "https://static.tcgcollector.com/content/images/22/61/dc/2261dc86b523cd8dd95d924110fa1ea5fbb177a26576f66da400fc3b16ce71c4.webp"
    },
    {
        name: "Tapu Koko V",
        number: "133/125",
        image: "https://i.ebayimg.com/thumbs/images/g/U78AAeSwcbNoo~tH/s-l500.jpg"
    },
    {
        name: "Scovillain ex",
        number: "219/208",
        image: "https://static.tcgcollector.com/content/images/9a/d0/77/9ad0776dbc30e78b7a86560f5d9c3ed6a2b5de134f3bf8bfb3bab2fab74d3dee.webp"
    },
    {
        name: "Brute Bonnet",
        number: "135/128",
        image: "https://static.tcgcollector.com/content/images/18/c3/e0/18c3e036e0cc111ef609778fe7202540d565056d7dcbae0f3c19c38c407975ac.webp"
    },
    {
        name: "Passimian",
        number: "125/122",
        image: "https://static.tcgcollector.com/content/images/e0/e8/2e/e0e82e48805b453984b77819abbdf977bd6d8ae5994f7c7dd3aff616fc7694d4.webp"
    }
];

// ==========================================
// MID GRADED CARDS
// ==========================================

const midCards = [
    {
        name: "Forretress",
        number: "117/052",
        gradingCompany: "CHINESE COMPANY",
        grade: "10",
        rarity: "Mid",
        image: "https://static.tcgcollector.com/content/images/85/8a/83/858a83fdbef7d37dfcf079c7b9c1eb7d2c0ab5b572a666d47ca002eaaff40b13.webp"
    },
    {
        name: "Grimer",
        number: "151",
        gradingCompany: "CGC",
        grade: "PRISTINE 10",
        cert: "1401032381050",
        rarity: "Mid",
        image: "https://i.ebayimg.com/images/g/HG8AAOSw5sJlNvEB/s-l1600.jpg"
    },
    {
        name: "Popplio",
        number: "",
        gradingCompany: "PSA",
        grade: "9",
        cert: "85157935",
        rarity: "Mid",
        image: "https://i.ebayimg.com/images/g/rxoAAeSw5ZZp2Cyv/s-l1600.webp"
    },
    {
        name: "Adventurer's Discovery",
        number: "TG23",
        gradingCompany: "PSA",
        grade: "9",
        cert: "72052968",
        rarity: "Mid",
        image: "https://i.ebayimg.com/images/g/D18AAOSwKPhjmlRS/s-l1200.jpg"
    },
    {
        name: "Arven's Mabosstiff",
        number: "081/063",
        gradingCompany: "CHINESE COMPANY",
        grade: "10",
        rarity: "Mid",
        image: "https://images.pkmnprices.com/cards/17fe17e69c509bec.webp"
    },
    {
        name: "Gengar V",
        number: "072/137",
        gradingCompany: "CHINESE COMPANY",
        grade: "10",
        rarity: "Mid",
        image: "https://i.ebayimg.com/images/g/CUsAAeSwLCZo5D3A/s-l500.jpg"
    }
];

// ==========================================
// ELITE GRADED CARDS
// ==========================================

const eliteCards = [
    {
        name: "Blastoise ex",
        number: "009/165",
        gradingCompany: "CGC",
        grade: "PRISTINE 10",
        rarity: "Elite",
        image: "https://i.ebayimg.com/thumbs/images/g/cp4AAeSwkt9puVCK/s-l500.jpg"
    },
    {
        name: "Durant ex",
        number: "242/208",
        gradingCompany: "CHINESE COMPANY",
        grade: "10",
        rarity: "Elite",
        image: "https://cdn.shopify.com/s/files/1/0853/4851/6149/files/242_csv9C_krystalkollectz.jpg?v=1778736498"
    }
];

// ==========================================
// LOAD SAVED DATA
// ==========================================

function loadArray(key) {
    try {
        const data = JSON.parse(localStorage.getItem(key) || "[]");
        return Array.isArray(data) ? data : [];
    } catch {
        return [];
    }
}

let credits = Number(localStorage.getItem("hvCredits"));

if (!Number.isFinite(credits) || credits < 0) {
    credits = 500;
}

let collection = loadArray("hvCollection");
let redeemedCodes = loadArray("hvRedeemedCodes");

const ownedPokemon = new Set();

collection = collection.filter(card => {
    if (!card.number || card.rarity !== "Basic") return true;

    if (ownedPokemon.has(card.number)) return false;

    ownedPokemon.add(card.number);
    return true;
});

let discoveredPokemon = [...ownedPokemon];

let selectedPack = "classic";

let packQuantities = {
    classic: 1,
    neon: 1,
    galaxy: 1
};

// PROMO CODES
const promoCodes = {
    HV100: 100,
    HV200: 200,
    HV300: 300,
    HV400: 400,
    HV500: 500,
    HV600: 600,
    HV700: 700,
    HV800: 800,
    HV900: 900,
    HV1000: 1000,
    HV1M: 1000000
};

// ==========================================
// SAVE DATA
// ==========================================

function saveData() {
    localStorage.setItem("hvCredits", credits);
    localStorage.setItem("hvCollection", JSON.stringify(collection));
    localStorage.setItem("hvRedeemedCodes", JSON.stringify(redeemedCodes));
    localStorage.setItem("hvDiscoveredPokemon", JSON.stringify(discoveredPokemon));
}

function updateCredits() {
    document.getElementById("credits").textContent =
        credits.toLocaleString();
}

function updatePrizePool() {
    discoveredPokemon = collection
        .filter(card => card.rarity === "Basic" && card.number)
        .map(card => card.number);

    saveData();
}

// ==========================================
// NAVIGATION
// ==========================================

document.querySelectorAll(".nav-btn").forEach(button => {
    button.addEventListener("click", () => {
        const tabName = button.dataset.tab;

        document.querySelectorAll(".nav-btn").forEach(btn =>
            btn.classList.remove("active")
        );

        document.querySelectorAll(".tab").forEach(tab =>
            tab.classList.remove("active")
        );

        button.classList.add("active");
        document.getElementById(tabName).classList.add("active");

        if (tabName === "inventory") renderCollection();
    });
});

// ==========================================
// PACK POPUP
// ==========================================

function showPack(packType) {
    selectedPack = packType;

    const pack = packs[packType];

    const art = document.getElementById("modalPackArt");
    art.className = `pack-art modal-pack ${packType}-pack`;

    document.getElementById("modalPackTitle").textContent =
        packType.toUpperCase();

    document.getElementById("modalName").textContent = pack.name;
    document.getElementById("modalPrice").textContent =
        `${pack.price} Credits per pack`;

    document.getElementById("basicOdds").textContent = pack.odds.Basic + "%";
    document.getElementById("midOdds").textContent = pack.odds.Mid + "%";
    document.getElementById("eliteOdds").textContent = pack.odds.Elite + "%";

    document.getElementById("packQuantity").value =
        packQuantities[packType];

    updateQuantity();

    const message = document.getElementById("packMessage");

    if (!packUnlocked[packType]) {
        message.textContent = "🔒 This pack is currently locked!";
        message.className = "code-message error";
    } else {
        message.textContent = "";
        message.className = "code-message";
    }

    document.getElementById("packModal").classList.add("show");
}

function closePack() {
    document.getElementById("packModal").classList.remove("show");
}

document.getElementById("packQuantity")
    .addEventListener("input", updateQuantity);

function updateQuantity() {
    const quantity = Math.max(
        1,
        Math.min(10, Number(document.getElementById("packQuantity").value) || 1)
    );

    document.getElementById("packQuantity").value = quantity;

    packQuantities[selectedPack] = quantity;

    document.getElementById("quantityNumber").textContent = quantity;

    const total = packs[selectedPack].price * quantity;

    document.getElementById("totalCost").textContent =
        total.toLocaleString();
}

// ==========================================
// RARITY GENERATION
// ==========================================

function generateRarity(pack) {
    const random = Math.random() * 100;

    if (random < pack.odds.Elite) return "Elite";

    if (random < pack.odds.Elite + pack.odds.Mid) return "Mid";

    return "Basic";
}

// ==========================================
// AVAILABLE BASIC POKEMON
// ==========================================

function getAvailablePokemon() {
    return pokemonCards.filter(card =>
        !collection.some(owned =>
            owned.rarity === "Basic" && owned.number === card.number
        )
    );
}

// ==========================================
// AVAILABLE MID CARDS
// ==========================================

function getAvailableMidCards() {
    return midCards.filter(card =>
        !collection.some(owned =>
            owned.rarity === "Mid" &&
            (
                owned.midCardId === card.name ||
                owned.name === card.name
            )
        )
    );
}

// ==========================================
// CREATE CARD
// ==========================================

function createCard(packType) {
    const pack = packs[packType];
    let rarity = generateRarity(pack);

    if (rarity === "Basic") {
        const availablePokemon = getAvailablePokemon();

        if (availablePokemon.length > 0) {
            const pokemon = availablePokemon[
                Math.floor(Math.random() * availablePokemon.length)
            ];

            return {
                id: Date.now() + Math.random(),
                name: pokemon.name,
                number: pokemon.number,
                image: pokemon.image,
                rarity: "Basic",
                value: pack.values.Basic,
                pack: packType,
                grade: "10",
                gradingCompany: "CHINESE COMPANY"
            };
        }

        rarity = "Mid";
    }

    if (rarity === "Mid") {
        const availableMidCards = getAvailableMidCards();

        if (availableMidCards.length > 0) {
            const selectedCard = availableMidCards[
                Math.floor(Math.random() * availableMidCards.length)
            ];

            return {
                id: Date.now() + Math.random(),
                ...selectedCard,
                midCardId: selectedCard.name,
                value: pack.values.Mid,
                pack: packType
            };
        }

        rarity = "Elite";
    }

    if (rarity === "Elite") {
        const selectedCard = eliteCards[
            Math.floor(Math.random() * eliteCards.length)
        ];

        return {
            id: Date.now() + Math.random(),
            ...selectedCard,
            value: pack.values.Elite,
            pack: packType
        };
    }
}

// ==========================================
// GRADED SLAB
// ==========================================

function createSlab(card) {
    const artwork = card.image
        ? `
            <img
                src="${card.image}"
                alt="${card.name}"
                onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';"
            >
            <div class="slab-placeholder" style="display:none">
                ${card.name}
            </div>
        `
        : `
            <div class="slab-placeholder">
                <span>POKEMON CARD</span>
                <strong>${card.name}</strong>
                <small>${card.number || ""}</small>
                <span class="artwork-pending">IMAGE NOT ADDED YET</span>
            </div>
        `;

    const company = card.gradingCompany || "CHINESE COMPANY";
    const grade = card.grade || "10";

    return `
        <div class="slab">
            <div class="slab-label">
                <span>HAPPY'S VAULT</span>
                <strong>${company} ${grade}</strong>
                ${card.cert ? `<small>CERT ${card.cert}</small>` : ""}
            </div>

            <div class="slab-card">
                ${artwork}
            </div>

            <div class="slab-footer">
                <span>${card.number || ""}</span>
                <span>${company} · ${grade}</span>
            </div>

            <div class="slab-glare"></div>
        </div>
    `;
}

// ==========================================
// OPEN PACKS
// ==========================================

function openPacks() {
    if (!packUnlocked[selectedPack]) {
        document.getElementById("packMessage").textContent =
            "🔒 This pack is currently locked!";

        document.getElementById("packMessage").className =
            "code-message error";

        return;
    }

    const pack = packs[selectedPack];
    const quantity = packQuantities[selectedPack];
    const totalCost = pack.price * quantity;

    if (credits < totalCost) {
        document.getElementById("packMessage").textContent =
            "You don't have enough credits!";

        document.getElementById("packMessage").className =
            "code-message error";

        return;
    }

    credits -= totalCost;

    const newCards = [];

    for (let i = 0; i < quantity; i++) {
        const card = createCard(selectedPack);

        collection.push(card);
        newCards.push(card);
    }

    updatePrizePool();
    updateCredits();

    closePack();
    showResults(newCards);
    renderCollection();
}

// ==========================================
// SHOW NEW CARDS
// ==========================================

function showResults(cards) {
    const container = document.getElementById("newCards");

    container.innerHTML = "";

    cards.forEach(card => {
        const cardElement = document.createElement("div");
        cardElement.className = "new-card";

        if (
            (card.rarity === "Basic" && card.number) ||
            (
                (card.rarity === "Mid" || card.rarity === "Elite") &&
                card.gradingCompany
            )
        ) {
            cardElement.innerHTML = `
                ${createSlab(card)}
                <h3>${card.name}</h3>
                <p>${card.rarity.toUpperCase()} · ${card.number || "SPECIAL CARD"}</p>
                <p>${card.value} Credits</p>
            `;
        } else {
            cardElement.innerHTML = `
                <div class="card-art">${card.icon || "⭐"}</div>
                <h3>${card.name}</h3>
                <p>${card.rarity}</p>
                <p>${card.value} Credits</p>
            `;
        }

        container.appendChild(cardElement);
    });

    document.getElementById("resultsModal").classList.add("show");
}

function closeResults() {
    document.getElementById("resultsModal").classList.remove("show");
}

// ==========================================
// COLLECTION
// ==========================================

function renderCollection() {
    const container = document.getElementById("collection");
    const emptyMessage = document.getElementById("emptyMessage");

    container.innerHTML = "";

    document.getElementById("totalCards").textContent =
        collection.length;

    const totalValue = collection.reduce((sum, card) =>
        sum + Number(card.value || 0), 0
    );

    document.getElementById("collectionValue").textContent =
        totalValue.toLocaleString() + " ✦";

    emptyMessage.style.display =
        collection.length === 0 ? "block" : "none";

    collection.forEach(card => {
        const element = document.createElement("div");

        element.className =
            `card-item ${card.rarity.toLowerCase()}-card`;

        if (
            (card.rarity === "Basic" && card.number) ||
            (
                (card.rarity === "Mid" || card.rarity === "Elite") &&
                card.gradingCompany
            )
        ) {
            element.innerHTML = `
                ${createSlab(card)}
                <h3>${card.name}</h3>
                <p>${card.rarity.toUpperCase()} · ${card.number || "SPECIAL CARD"}</p>
                <p>${card.value} Credits</p>
                <button onclick="sellCard('${card.id}')">
                    SELL FOR ${card.value}
                </button>
            `;
        } else {
            element.innerHTML = `
                <div class="card-art">${card.icon || "⭐"}</div>
                <h3>${card.name}</h3>
                <p>${card.rarity} · ${card.value} Credits</p>
                <button onclick="sellCard('${card.id}')">
                    SELL FOR ${card.value}
                </button>
            `;
        }

        container.appendChild(element);
    });
}

// ==========================================
// SELL ONE CARD
// ==========================================

function sellCard(id) {
    const index = collection.findIndex(card =>
        String(card.id) === String(id)
    );

    if (index === -1) return;

    const soldCard = collection[index];

    credits += Number(soldCard.value || 0);
    collection.splice(index, 1);

    updatePrizePool();
    updateCredits();
    renderCollection();
}

// ==========================================
// SELL ALL BASIC CARDS
// ==========================================

function sellAllBasic() {
    const basicCards = collection.filter(card =>
        card.rarity === "Basic"
    );

    if (basicCards.length === 0) {
        alert("You don't have any Basic cards to sell!");
        return;
    }

    const earnings = basicCards.reduce((sum, card) =>
        sum + Number(card.value || 0), 0
    );

    collection = collection.filter(card =>
        card.rarity !== "Basic"
    );

    updatePrizePool();

    credits += earnings;

    updateCredits();
    renderCollection();

    alert(
        `You sold ${basicCards.length} Basic cards for ${earnings} credits!`
    );
}

// ==========================================
// PROMO CODES
// ==========================================

function redeemCode() {
    const input = document.getElementById("codeInput");
    const code = input.value.trim().toUpperCase();

    if (!code) {
        showCodeMessage("Please enter a code.", false);
        return;
    }

    if (!Object.prototype.hasOwnProperty.call(promoCodes, code)) {
        showCodeMessage("Invalid code.", false);
        return;
    }

    if (redeemedCodes.includes(code)) {
        showCodeMessage("You have already redeemed this code.", false);
        return;
    }

    const reward = promoCodes[code];

    credits += reward;
    redeemedCodes.push(code);

    saveData();
    updateCredits();

    input.value = "";

    showCodeMessage(
        `Success! You received ${reward.toLocaleString()} credits!`,
        true
    );
}

function showCodeMessage(message, success) {
    const element = document.getElementById("codeMessage");

    element.textContent = message;

    element.className = success
        ? "code-message success"
        : "code-message error";
}

// ==========================================
// START WEBSITE
// ==========================================

updatePrizePool();
updateCredits();
renderCollection();
