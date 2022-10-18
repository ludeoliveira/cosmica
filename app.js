// grab a couple a thuings

const section = document.querySelector("section");
const playerLivesCount = document.querySelector("span");
let playerLives = 6;

// link text

playerLivesCount.textContent = playerLives;

// generate the data

const getData = () => [
    {imgSrc: "./images/beer_lady_amarcusso.jpg", name: "beer-lady"},
    {imgSrc: "./images/boitata_bieu_moura.jpg", name: "boitata"},
    {imgSrc: "./images/caldinho_isabella_galvao.jpg", name: "caldinho"},
    {imgSrc: "./images/ceramiquinho_guilherme_lira.jpg", name: "ceramiquinho"},
    {imgSrc: "./images/marighella_filme_desconhecido.jpg", name: "marighella"},
    {imgSrc: "./images/ventre_julia_moreira.jpg", name: "ventre"},
    {imgSrc: "./images/vermelho_abroz.jpg", name: "vermelho"},
    {imgSrc: "./images/voo_opaco_furmiga.jpg", name: "voo-opaco"},
    {imgSrc: "./images/beer_lady_amarcusso.jpg", name: "beer-lady"},
    {imgSrc: "./images/boitata_bieu_moura.jpg", name: "boitata"},
    {imgSrc: "./images/caldinho_isabella_galvao.jpg", name: "caldinho"},
    {imgSrc: "./images/ceramiquinho_guilherme_lira.jpg", name: "ceramiquinho"},
    {imgSrc: "./images/marighella_filme_desconhecido.jpg", name: "marighella"},
    {imgSrc: "./images/ventre_julia_moreira.jpg", name: "ventre"},
    {imgSrc: "./images/vermelho_abroz.jpg", name: "vermelho"},
    {imgSrc: "./images/voo_opaco_furmiga.jpg", name: "voo-opaco"}

];

// randomize
const randomize = () => {
    const cardData = getData(); //guarda a array de dados das cartas em cardData
    cardData.sort(() => Math.random() - 0.5); //randomiza a array de dados das cartas
    return cardData;
}

// card generator function, renderizes the cards in the d.o.m

const cardGenerator = () => {
    const cardData = randomize(); //get a shuffled version of the cards
    // generate the html
    cardData.forEach((item) => {
        const card = document.createElement("div");
        const face = document.createElement("img");
        const back = document.createElement("img");
        card.classList = "card";
        face.classList = "face";
        back.classList = "back";
        // attach the info to the cards
        face.src = item.imgSrc;
        card.setAttribute("name", item.name);
        // atach the cards to the section
        section.appendChild(card);
        card.appendChild(face); 
        card.appendChild(back);
        
        card.addEventListener('click', (e) => {
            card.classList.toggle("toggleCard");
            checkCards(e);
        })
    })  
}

// check cards

const checkCards = (e) => {
    const clickedCard = e.target; //when we click the card the event will capture some data
    clickedCard.classList.add("flipped");
    const flippedCards = document.querySelectorAll(".flipped");
    

    if (flippedCards.length === 2) {
        if (flippedCards[0].getAttribute("name") === flippedCards[1].getAttribute("name")) {
            console.log("match");
            flippedCards.forEach(card => {
                card.classList.remove("flipped")
                card.style.pointerEvents = "none";
            })
        } else {
            console.log("wrong");
            flippedCards.forEach(card => {
                card.classList.remove("flipped");
                setTimeout(() => card.classList.remove("toggleCard"), 1000)
            })
            playerLives--;
            playerLivesCount.textContent = playerLives;
            if(playerLives === 0) {
                restart()
            }
        }      
    }

    
}

// restart
const restart = () => {
    let cardData = randomize();
    let faces = document.querySelectorAll(".face");
    let cards = document.querySelectorAll(".card");
    section.style.pointerEvents = "none";
    cardData.forEach((item, index) => {
        cards[index].classList.remove("toggleCard");
        // randomize
        setTimeout(() => {
        cards[index].style.pointerEvents = "all";
        faces[index].src = item.imgSrc;
        cards.index.setAttribute("name", item.name);
        section.style.pointerEvents = "all";
        }, 1000)
    })
    playerLives = 6;
    playerLivesCount.textContent = playerLives; 
    setTimeout()
}

cardGenerator();

