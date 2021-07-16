let time = 5000,
    currentImageIndex = 0,
    images = document.querySelectorAll("#slider img"),
    max = images.length;

function nextImage() {

    images[currentImageIndex]
        .classList.remove("selected")

    currentImageIndex++;

    if (currentImageIndex >= max)
        currentImageIndex = 0;

    images[currentImageIndex]
        .classList.add("selected")

}

function start() {
    setInterval(() => {
        nextImage()
    }, time)
}

window.addEventListener("load", start)

function searchProducts() {
    const input = document.getElementById('filter').value.toUpperCase();
    const cardssContainer = document.getElementById('cards-lists');
    console.assert(cardssContainer);

    const cards = cardsContainer.getElementById('cards');
    console.log(cards);

    for (let i = 0; i < cards.length; i++) {
        let title = cards[i].querySelector(".cards-body h3.cards-title");
        console.log(title);


        if (title.innerText.toUpperCase().indexOf(input) > -1) {
            cards[i].style.display = "";
        } else {
            cards[i].style.display = "none";
        }

    }
}