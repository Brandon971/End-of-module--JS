//Sample data
let products = JSON.parse(localStorage.getItem('products')) ?
JSON.parse(localStorage.getItem('products')) : [ 
    {
        id : 1,
        name  : 'Nike AIR FORCE 1',
        brand : 'nike',
        price : 2899.00 ,
        image : '../assets/DX1193-200-1.webp'
    },
    {
        id :  2,
        name : 'AIR MORE UPTEMPO 96',
        brand : 'nike',
        price : 4399.00,
        image : '../assets/FB1380-100-1.webp',
    },
    {
        id : 3,
        name : 'Air Max 95',
        brand : 'nike',
        price : 3399.00,
        image : '../assets/DR2550-100-1.webp'
    },
    {
        id: 4,
        name : 'Fontanka waffle',
        brand : 'nike',
        price : 2099.00,
        image : '../assets/DC3579-006-1.webp'
    },
    {
        id : 5,
        name  : 'FORUM LOW',
        brand : 'Adidas',
        price : 1599.00 ,
        image : '../assets/GW4374_1.webp'
    },
    {
        id : 6,
        name  : 'FORUM 84 LG',
        brand : 'Puma',
        price : 1599.00 ,
        image : '../assets/GZ1893_1.webp'
    },
    {
        id : 7,
        name  : 'SLIPSTREAM CHARMANDER',
        brand : 'Puma',
        price : 1599.00 ,
        image : '../assets/387686_01-1.webp'
    },
    {
        id : 8,
        name  : 'AIR JORDAN LEGACY 312 LOW',
        brand : 'Jordan',
        price : 1599.00 ,
        image : '../assets/CD7069-116-1.webp'
    },
]

function displayProducts() {
    products.forEach((sneakers) => {
        document.querySelector('.products').innerHTML += 
        `<div class="card col-4 mt-5" style="width: 18rem;">
        <img src="${sneakers.image}" class="card-img-top w-100" alt="nikeAf1">
        <div class="card-body">
          <h5 class="card-title">${sneakers.name}</h5>
          <p class="card-text text-center">Price : R ${sneakers.price}</p>
          <a class="buybtn btn btn-dark" id="${sneakers.id}">BUY</a>
        </div>
    </div>`
    })
}
displayProducts()

let checkout =[]
localStorage.setItem('checkout',JSON.stringify(checkout))
let checkBtn = document.querySelectorAll('.buybtn');
checkBtn.forEach((btn)=> {
    btn.addEventListener('click', (e) => {
        alert('SNEAKER ADDED TO CHECKOUT')
        e.preventDefault()
        let adidas = btn.id -1 ;
        goCheckout(adidas)
})
}
)

function goCheckout(checkShoe) {
    checkout.push(products[checkShoe]);
    console.log(checkout)
    localStorage.setItem('checkout',JSON.stringify(checkout))
}

// 
let filterBy = document.querySelector('#brand');

filterBy.addEventListener('change',(e) =>{
    console.log(e.target.value)
    let brandsFiltered = products.filter(sneakers => {
        return sneakers.brand === e.target.value
    })
    document.querySelector('.products').innerHTML = "";
    brandsFiltered.forEach((sneakers)=>{
        document.querySelector('.products').innerHTML +=`
        <div class="card col-4 mt-5" style="width: 18rem;">
            <img src="${sneakers.image}" class="card-img-top w-100" alt="nikeAf1">
            <div class="card-body">
              <h5 class="card-title">${sneakers.name}</h5>
              <p class="card-text text-center">Price : R ${sneakers.price}</p>
            </div>
        </div>`
    })
    console.log(brandsFiltered)
} )








