let mushroom = 0
let click = 1
let clickPower = 1
let autoPower = 0

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

function drawPower() {
  // clickUpgrades.forEach(c => {
  //   if (c.quantity > 0) {
  //     clickPower += c.quantity * c.multiplier
  //   }
  // })
  // automaticUpgrades.forEach(a => {
  //   if (a.quantity > 0) {
  //     autoPower += a.quantity * a.multiplier
  //   }
  // })
  // @ts-ignore
  document.getElementById('clicks').innerText = clickPower
  // @ts-ignore
  document.getElementById('autos').innerText = autoPower
}


function updateMushroomCount() {
  let template = ''
  if (mushroom >= 0) {
    // console.log('i have', mushroom, 'mushrooms');
    template += `
    <div id="total-mushrooms">${mushroom}</div>
    `
    // @ts-ignore
  } document.getElementById('total-mushrooms').innerHTML = template
}


// check if user has enough mushrooms
// if they do, increase tinybasket purchased quantity
// decrease mushroom quantity by price of tinybasket
function buyTinyBasket() {
  let upgrade = clickUpgrades.find(u => u.name == 'tiny-basket')
  // @ts-ignore
  if (mushroom >= upgrade.price) {
    // @ts-ignore
    upgrade.quantity += 1
    let tinyBasketElem = document.getElementById('tiny-basket-quantity')
    // @ts-ignore
    tinyBasketElem.innerText = upgrade.quantity
    // @ts-ignore
    mushroom -= upgrade.price
    // @ts-ignore
    upgrade.price += 10
    let tinyBasketPriceElem = document.getElementById('tiny-basket-price')
    // @ts-ignore
    clickPower += upgrade.quantity * upgrade.multiplier
    // @ts-ignore
    tinyBasketPriceElem.innerText = upgrade.price
  } else {
    alert('Not enough mushrooms, keep foraging!')
  }
  updateMushroomCount()
  drawPower()
  console.log(upgrade);
  // let tinyBasketElm = document.getElementById('tiny-basket')
  // console.log("grabbed", tinyBasketElm)
}

function buyMegaBasket() {
  let upgrade = clickUpgrades.find(u => u.name == 'mega-basket')
  // @ts-ignore
  if (mushroom >= upgrade.price) {
    // @ts-ignore
    upgrade.quantity += 1
    let megaBasketElem = document.getElementById('mega-basket-quantity')
    // @ts-ignore
    megaBasketElem.innerText = upgrade.quantity
    // @ts-ignore
    mushroom -= upgrade.price
    // @ts-ignore
    upgrade.price += 20
    let megaBasketPriceElem = document.getElementById('mega-basket-price')
    // @ts-ignore
    clickPower += upgrade.quantity * upgrade.multiplier
    // @ts-ignore
    megaBasketPriceElem.innerText = upgrade.price
  } else {
    alert('Not enough mushrooms, keep foraging!')
  }
  updateMushroomCount()
  drawPower()
  console.log(upgrade)
}

function buyGnome() {
  let upgrade = automaticUpgrades.find(u => u.name == 'friendly-gnome')
  // @ts-ignore
  if (mushroom >= upgrade.price) {
    // @ts-ignore
    upgrade.quantity += 1
    let gnomeElem = document.getElementById('gnome-quantity')
    // @ts-ignore
    gnomeElem.innerText = upgrade.quantity
    // @ts-ignore
    mushroom -= upgrade.price
    // @ts-ignore
    upgrade.price += 50
    let gnomePriceElem = document.getElementById('gnome-price')
    // @ts-ignore
    autoPower += upgrade.quantity * upgrade.multiplier
    // @ts-ignore
    gnomePriceElem.innerText = upgrade.price
  } else {
    alert('Not enough mushrooms, keep foraging!')
  }
  updateMushroomCount()
  drawPower()
  console.log(upgrade)
}

function buySprite() {
  let upgrade = automaticUpgrades.find(u => u.name == 'friendly-sprite')
  // @ts-ignore
  if (mushroom >= upgrade.price) {
    // @ts-ignore
    upgrade.quantity += 1
    let spriteElem = document.getElementById('sprite-quantity')
    // @ts-ignore
    spriteElem.innerText = upgrade.quantity
    // @ts-ignore
    mushroom -= upgrade.price
    // @ts-ignore
    upgrade.price += 75
    let spritePriceElem = document.getElementById('sprite-price')
    // @ts-ignore
    autoPower += upgrade.quantity * upgrade.multiplier
    // @ts-ignore
    spritePriceElem.innerText = upgrade.price
  } else {
    alert('Not enough mushrooms, keep foraging!')
  }
  updateMushroomCount()
  drawPower()
  console.log(upgrade)
}

// iterate over autoUpgrades array
// total the quantity of each autoUpgrade * upgrade multiplier
// add above value to total mushrooms
function collectAutoUpgrades() {
  // @ts-ignore
  // @ts-ignore
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