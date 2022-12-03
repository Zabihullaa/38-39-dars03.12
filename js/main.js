const products = {
    crazy:{
        name:'Crazy',
        price:31000,
        amount:0,
        img:'img/image 1.png',
        get tottalSumm(){
            return this.price * this.amount
        }
    },
    light:{
        name:'Light',
        price:26000,
        amount:0,
        img:'img/image 2.png',
        get tottalSumm(){
            return this.price * this.amount
        }
    },
    cheeseBurger:{
        name:'',
        price:29000,
        amount:0,
        img:'img/image 3.png',
        get tottalSumm(){
            return this.price * this.amount
        }
    },
    dBurger:{
        name:'dBurger',
        price:24000,
        amount:0,
        img:'img/image 4.png',
        get tottalSumm(){
            return this.price * this.amount
        }
    }
}

const productBtn = document.querySelectorAll('.menu__btn')
const menuCont = document.querySelectorAll('.menu__count')
basketBtn = document.querySelector('.nav__btn'),
basketModal = document.querySelector('.nav__basket'),
closeBasketModal = document.querySelector('.nav__basket-btn'),
basketChecklist = document.querySelector('.nav__basket-checklist'),
totalPeiceBasket = document.querySelector('.nav__basket-totalPrice'),
basketBtnCount = document.querySelector('.nav__btn-count'),
btnCard = document.querySelector('.nav__basket-bottom');

productBtn.forEach(btn => {
    btn.addEventListener('click', function () {
        plusOrMinus(this)
    })
})
function plusOrMinus(btn){
    let parent = btn.closest('.menu__item')
    let parentId = parent.getAttribute('id')
    products[parentId].amount++
    basket()
}
function basket() {
    const productsArry = [];
    for (const  key in products) {
            const po = products[key],
            productCard = document.querySelector(`#${key}`),
            parentIndecator = productCard.querySelector('.menu__count');
            if (po.amount > 0) {
                productsArry.push(po)
                console.log(productCard);
                basketBtnCount.classList.add('active')
                parentIndecator.classList.add('active')
                parentIndecator.innerHTML = po.amount

            }
            
    }
    for ( let i = 0; i < productsArry.length; i++) {
        const el = productsArry[i];
        basketChecklist.innerHTML = cardItemBurger(el)
    }
      
}
basketBtn.addEventListener('click', function(){
    basketModal.classList.add('active')
})
function cardItemBurger(productData){
    const {name, totalSumm:price, amount, img} = productData
    return`
    <div class="product">
    <div class="product__info">
        <img src="${img}" alt="" class="product__img">
        <div>
            <p class="product__name">${name}</p>
            <p class="product__price">${price}</p>
        </div>
    </div>
    <div class="product__option ${name.toLowerCase()}">
        <button class="product__symbol minus" data-sybol="-">-</button>
        <output class="product__count">${amount}</output>
        <button class="product__symbol plus" data-sybol="+">+</button>

    </div>
</div>
    `
}


