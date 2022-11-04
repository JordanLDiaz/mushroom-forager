let mushroom = 0

let clickUpgrades = [
  {
    name: 'tiny-basket',
    quantity: 0,
    price: 25,
    multiplier: 1
  }, {
    name: 'mega-basket',
    quantity: 0,
    price: 50,
    multiplier: 5
  }
];

let automaticUpgrades = [
  {
    name: 'friendly-gnome',
    quantity: 0,
    price: 100,
    multiplier: 10
  }, {
    name: 'friendly-sprite',
    quantity: 0,
    price: 250,
    multiplier: 20
  }
]


function forage() {
  // let mushroom = mushrooms.find(m => m.color == 'red')
  // console.log(mushroom)
  mushroom++
  // alert(mushroom)
  updateMushroomCount()
}

function updateMushroomCount() {
  let template = ''
  if (mushroom > 0) {
    console.log('i have', mushroom, 'mushrooms');
    template += `
    <div class="col-3 p-3">
        <button class="bg-success text-light">
          <h2>Total Mushrooms: 
            <div> ${mushroom}</div>
          </h2>
        </button>
      </div>
    `
  } document.getElementById('total-mushrooms').innerHTML = template
}

// check if user has enough mushrooms (25)
// if they do, increase tinybasket purchased quantity
// decrease mushroom quantity by price of tinybasket
function buyTinyBasket() {
  let upgrade = clickUpgrades.find(u => u.name == 'tiny-basket')
  if (mushroom >= upgrade.price) {
    upgrade.quantity += 1
    let tinyBasketElem = document.getElementById('tiny-basket-quantity')
    tinyBasketElem.innerText = upgrade.quantity
    mushroom -= upgrade.price
    upgrade.price += 25
    let tinyBasketPriceElem = document.getElementById('tiny-basket-price')
    tinyBasketPriceElem.innerText = upgrade.price
  }
  updateMushroomCount()
  console.log(upgrade);
  // let tinyBasketElm = document.getElementById('tiny-basket')
  // console.log("grabbed", tinyBasketElm)
}

function buyMegaBasket() {
  let upgrade = clickUpgrades.find(u => u.name == 'mega-basket')
  if (mushroom >= upgrade.price) {
    upgrade.quantity += 1
    let megaBasketElem = document.getElementById('mega-basket-quantity')
    megaBasketElem.innerText = upgrade.quantity
    mushroom -= upgrade.price
    upgrade.price += 50
    let megaBasketPriceElem = document.getElementById('mega-basket-price')
    megaBasketPriceElem.innerText = upgrade.price
  }
  updateMushroomCount()
  console.log(upgrade)
}