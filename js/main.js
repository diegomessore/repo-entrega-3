


document.addEventListener('DOMContentLoaded', () => {

    const cards = document.querySelectorAll('.section__card');

    const prevButton = document.querySelector(".carousel__conttrol.prev");
    const nextButton = document.querySelector(".carousel__conttrol.next");

    let currentCardIndex = 0;

    const showCard = (index)=> {
        cards.forEach(card => card.classList.remove('show'))
        cards[index].classList.add("show");
    }

    const changeCard = (increment) => {
        currentCardIndex = (currentCardIndex + increment + cards.length) % cards.length;
        showCard(currentCardIndex);
    }

    nextButton.addEventListener("click",(event)=>{
        event.preventDefault();
        changeCard(1);
    })
    prevButton.addEventListener("click",(event)=>{
        event.preventDefault();
        changeCard(-1);
    })
});