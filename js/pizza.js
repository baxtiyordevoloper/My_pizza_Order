const pizzaArray = [
  {
    id: 1,
    name: "Pepperoni",
    price: 2.23,
    imgUrl: "../img/pizza1.png",
  },
  {
    id: 2,
    name: "Cheesy",
    price: 5.99,
    imgUrl: "../img/pizza2.jpg",
  },
  {
    id: 3,
    name: "Margarita",
    price: 7.48,
    imgUrl: "../img/pizza3.jpg",
  },
  {
    id: 4,
    name: "Hawaiian",
    price: 9.32,
    imgUrl: "../img/pizza4.jpg",
  },
  {
    id: 5,
    name: "Java",
    price: 5,
    imgUrl: "../img/pizza4.jpg",
  },
  {
    id: 6,
    name: "Javascript",
    price: 10,
    imgUrl: "../img/pizza4.jpg",
  },
  {
    id: 7,
    name: "Python",
    price: 10,
    imgUrl: "../img/pizza4.jpg",
  },
];

let menuList = document.querySelector(".menu__list");
let cartList = document.querySelector(".cart__list");
let elSubtotal = document.querySelector("#subtotal");
let totalPrice = 0;

for (let i = 0; i < pizzaArray.length; i++) {
  let li = document.createElement('li');
  li.className = "menu_item pizza"
  li.innerHTML = `
    <img class="pizza__img" src=${pizzaArray[i].imgUrl} alt="pizza" />
    <div class="pizza__name">
      <p class="pizza__p">${pizzaArray[i].name}</p>
      <span class="pizza__price">${pizzaArray[i].price}</span>
      <button class="pizza__btn" onclick='addItem(${pizzaArray[i].id})'>
        Add to Cart
      </button>
    </div>
  `

  menuList.appendChild(li);
}

let newPizzaArr = [];
function addItem(id) {
  for (let i = 0; i < pizzaArray.length; i++) {
    if (id == pizzaArray[i].id) {
      newPizzaArr.push(pizzaArray[i])
    }
  }

  for (let i = 0; i < newPizzaArr.length; i++) {
    if (i == newPizzaArr.length - 1) {
      let li = document.createElement('li');
      li.className = "menu_item pizza cart__item"
      li.innerHTML = `
      <img class="pizza__img" src=${newPizzaArr[i].imgUrl} alt="pizza" />
      <div class="pizza__name">
        <p class="pizza__p">${newPizzaArr[i].name}</p>
        <span class="pizza__price">${newPizzaArr[i].price}</span>
        <button class="pizza__btn remove" onclick='removeItem(${i})'>
          -
        </button>
      </div>
    `;
      totalPrice += newPizzaArr[i].price;
      elSubtotal.textContent = totalPrice.toFixed(2);
      cartList.appendChild(li);
    }

  }
}

function removeItem(index) {
  let newArrRemove = [];

  for (let i = 0; i < newPizzaArr.length; i++) {
    if (index != i) {
      newArrRemove.push(newPizzaArr[i])
    }
  }
  
  newPizzaArr = newArrRemove;

  cartList.innerHTML = "";
  totalPrice = 0;
  for (let i = 0; i < newPizzaArr.length; i++) {
      let li = document.createElement('li');
      li.className = "menu_item pizza cart__item"
      li.innerHTML = `
      <img class="pizza__img" src=${newPizzaArr[i].imgUrl} alt="pizza" />
      <div class="pizza__name">
        <p class="pizza__p">${newPizzaArr[i].name}</p>
        <span class="pizza__price">${newPizzaArr[i].price}</span>
        <button class="pizza__btn remove" onclick='removeItem(${i})'>
          -
        </button>
      </div>
    `;
      totalPrice += newPizzaArr[i].price;
      elSubtotal.textContent = totalPrice.toFixed(2);
      cartList.appendChild(li);
  }

}