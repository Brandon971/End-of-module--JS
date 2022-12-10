let products = JSON.parse(localStorage.getItem('checkout')) 

function displayProducts() {
    products.forEach((sneakers) => {
        document.querySelector('.products').innerHTML += 
        `<div class="card col-4 mt-5" style="width: 18rem;">
        <img src="${sneakers.image}" class="card-img-top w-100" alt="nikeAf1">
        <div class="card-body">
          <h5 class="card-title">${sneakers.name}</h5>
          <p class="card-text text-center">Price : R ${sneakers.price}</p>
        </div>
    </div>`
    })
}
displayProducts()