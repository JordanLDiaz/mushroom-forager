let mushroom = 0

let clickUpgrades = [
  {
    name: 'tiny-basket',
    quantity: 0,
    price: 10,
    multiplier: 1,
    type: 'click'
  }, {
    name: 'mega-basket',
    quantity: 0,
    price: 30,
    multiplier: 5,
    type: 'click'
  }
];

let automaticUpgrades = [
  {
    name: 'friendly-gnome',
    quantity: 0,
    price: 50,
    multiplier: 10,
    type: 'auto'
  }, {
    name: 'friendly-sprite',
    quantity: 0,
    price: 75,
    multiplier: 20,
    type: 'auto'
  }
]

function forage() {
  mushroom++
  // need to change mushroom ++ to add based on basket multiplier
  let clicks = 0
  clickUpgrades.forEach(c => {
    if (c.quantity > 0) {
      clicks += c.quantity * c.multiplier
    }
  })
  mushroom += clicks
  updateMushroomCount()
}


// How to show total amount of resources to be collected per click, and resources collected on auto interval?

function updateMushroomCount() {
  let template = ''
  if (mushroom >= 0) {
    // console.log('i have', mushroom, 'mushrooms');
    template += `
    <div id="total-mushrooms">${mushroom}</div>
    `
  } document.getElementById('total-mushrooms').innerHTML = template
}

// check if user has enough mushrooms
// if they do, increase tinybasket purchased quantity
// decrease mushroom quantity by price of tinybasket
function buyTinyBasket() {
  let upgrade = clickUpgrades.find(u => u.name == 'tiny-basket')
  if (mushroom >= upgrade.price) {
    upgrade.quantity += 1
    let tinyBasketElem = document.getElementById('tiny-basket-quantity')
    tinyBasketElem.innerText = upgrade.quantity
    mushroom -= upgrade.price
    upgrade.price += 10
    let tinyBasketPriceElem = document.getElementById('tiny-basket-price')
    tinyBasketPriceElem.innerText = upgrade.price
  } else {
    alert('Not enough mushrooms, keep foraging!')
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
    upgrade.price += 20
    let megaBasketPriceElem = document.getElementById('mega-basket-price')
    megaBasketPriceElem.innerText = upgrade.price
  } else {
    alert('Not enough mushrooms, keep foraging!')
  }
  updateMushroomCount()
  console.log(upgrade)
}

function buyGnome() {
  let upgrade = automaticUpgrades.find(u => u.name == 'friendly-gnome')
  if (mushroom >= upgrade.price) {
    upgrade.quantity += 1
    let gnomeElem = document.getElementById('gnome-quantity')
    gnomeElem.innerText = upgrade.quantity
    mushroom -= upgrade.price
    upgrade.price += 50
    let gnomePriceElem = document.getElementById('gnome-price')
    gnomePriceElem.innerText = upgrade.price
  } else {
    alert('Not enough mushrooms, keep foraging!')
  }
  updateMushroomCount()
  console.log(upgrade)
}

function buySprite() {
  let upgrade = automaticUpgrades.find(u => u.name == 'friendly-sprite')
  if (mushroom >= upgrade.price) {
    upgrade.quantity += 1
    let spriteElem = document.getElementById('sprite-quantity')
    spriteElem.innerText = upgrade.quantity
    mushroom -= upgrade.price
    upgrade.price += 75
    let spritePriceElem = document.getElementById('sprite-price')
    spritePriceElem.innerText = upgrade.price
  } else {
    alert('Not enough mushrooms, keep foraging!')
  }
  updateMushroomCount()
  console.log(upgrade)
}

// iterate over autoUpgrades array
// total the quantity of each autoUpgrade * upgrade multiplier
// add above value to total mushrooms
function collectAutoUpgrades() {
  let totalMushrooms = 0
  automaticUpgrades.forEach(a => {
    if (a.quantity > 0) {
      mushroom += a.quantity * a.multiplier
      totalMushrooms += a.quantity * a.multiplier
      console.log(mushroom)
    }
  })
  updateMushroomCount()
}

setInterval(collectAutoUpgrades, 3000)
updateMushroomCount()