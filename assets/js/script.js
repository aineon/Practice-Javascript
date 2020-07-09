const defaultImage = 'assets/images/ireland.jpg',
      memoryCardList = [{
            name: 'boat',
            img: 'assets/images/bunnagee.jpg'
        },
        {
            name: 'waterfall',
            img: 'assets/images/waterfall.jpg'
        },
        {
            name: 'beach',
            img: 'assets/images/donegal_beach.jpg'
        }, 
        {
            name: 'island',
            img: 'assets/images/skellig_michael.jpg'
        },
         {
            name: 'lighthouse',
            img: 'assets/images/lighthouse.jpg'
        },
        {
            name: 'mountains',
            img: 'assets/images/mountains.jpg'
        },
        {
            name: 'arranmore',
            img: 'assets/images/arranmore.jpg'
        },
        {
            name: 'national park',
            img: 'assets/images/national_park.jpg'
        },
         {
            name: 'portnoo',
            img: 'assets/images/portnoo.jpg'
        },
        {
            name: 'dolmen',
            img: 'assets/images/dolmen.jpg'
        },
        {
            name: 'tay',
            img: 'assets/images/lough_tay.jpg'
        },
         {
            name: 'forty',
            img: 'assets/images/forty_foot.jpg'
        },
        {
            name: 'breeches',
            img: 'assets/images/the_breeches.jpg'
        },
        {
            name: 'gougane',
            img: 'assets/images/gougane_barra.jpg'
        },
        {
            name: 'bective',
            img: 'assets/images/bective.jpg'
        },
        {
            name: 'kerry',
            img: 'assets/images/kerry.jpg'
        },
         {
            name: 'letterfrack',
            img: 'assets/images/cliff.jpg'
        },
         {
            name: 'lake',
            img: 'assets/images/lake.jpg'
        },
    ];

    
        let easyCardList = memoryCardList.splice(0, 6);
        let mediumCardList = memoryCardList.splice(0, 12);
        let hardCardList = memoryCardList.slice(0);
        let easyGame = [...easyCardList, ...easyCardList];
        let mediumGame = [...mediumCardList, ...mediumCardList];
        let hardGame = [...hardCardList, ...hardCardList];
     
        function shuffleCards(array) {
    for (let i = array.length - 1; i > 0; i--) {
         const j = Math.floor(Math.random() * i);
           const temp = array[i];
           array[i] = array[j];
           array[j] = temp;
    }
}
        function loadGame(difficulty) {
             switch (difficulty.toLowerCase()) {
        case 'easy':
            createBoard(easyGame);
            break;
        case 'medium':
            createBoard(mediumGame);
            break;
        case 'hard':
            createBoard(hardGame);
            break;
        default:
            break;
    }
        }
  
function createBoard(cardList) {
    const grid = document.getElementById('grid');
    // Reset Grid contents.
    grid.innerHTML = '';
    cardList.forEach(element => {
        let card = document.createElement('img');
        card.setAttribute('src', defaultImage);
        card.setAttribute('data-name', element.name);
        card.setAttribute('data-path', element.img);
        card.classList.add('card');
        card.onclick = function () {
            flipCard(this);
        };
        grid.appendChild(card);
    });
}