document.addEventListener('DOMContentLoaded',() => {

    //card options
    const cardArray = [
        {
            name:'fries',
            image: 'images/fries.png'
        },
        {
            name:'fries',
            image: 'images/fries.png'
        },
        {
            name:'burger',
            image: 'images/burger.png'
        },
        {
            name:'burger',
            image: 'images/burger.png'
        },
        {
            name:'pizza',
            image: 'images/pizza.png'
        },
        {
            name:'pizza',
            image: 'images/pizza.png'
        },
        {
            name:'milkshake',
            image: 'images/milkshake.png'
        },
        {
            name:'milkshake',
            image: 'images/milkshake.png'
        },
        {
            name:'hot-dog',
            image: 'images/hot-dog.png'
        },
        {
            name:'hot-dog',
            image: 'images/hot-dog.png'
        },
        {
            name:'ice-cream',
            image: 'images/ice-cream.png'
        },
        {
            name:'ice-cream',
            image: 'images/ice-cream.png'
        },
        ]

        cardArray.sort(() => 0.5 - Math.random())
const grid = document.querySelector.apply('.grid')
const resultDisplay= document.querySelector('#result')
var cardsChosen = []
var cardsChosenId = []





//create board
function CreateBoard(){
    for (let i = 0; i < cardArray.length; i++){
        var card = document.createElement('img')
        card.setAttribute('src', 'images/blank.png')
        card.setAttribute('data-id', i)
        card.addEventListener('click',flipCard)
        grid.appendChild(card)
    }
}


// check for matches
function checkForMatch(){
    var cards = document.querySelectorAll('img')
    const optionOneId = cardsChosen[0]
    const optionTwoId = cardsChosen[1]
    if(cardsChosen[0] === cardsChosen[1]){
        alert('You found a match !')
        cards[optionOneId].setAttribute('src', images/white.png)
        cards[optionTwoId].setAttribute('src', images/white.png)
        cardsWon.push(cardsChosen)
    }else{
        cards[optionOneId].setAttribute('src', images/blank.png)
        cards[optionTwoId].setAttribute('src', images/blank.png)
        alert('Sorry,try again')
    }
    cardsChosen=[]
    cardsChosenId=[]
    resultDisplay.textContent = cardsWon.length
    if(cardsWon.length === cardArray.length/2){
        resultDisplay.textContent ='Congratulations ! You found them all !'
    }
}



//flip your card
function flipCard(){
    var cardId = this.getAttribute('data-id')
    cardsChosen.push(cardArray[cardId].name)
    cardsChosenId.push(cardId)
    this.setAttribute('src', cardArray[cardId].img)
if(cardsChosen.length === 2){
    setTimeout(checkForMatch, 500)
}





}



























    })

