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

function editProducts() {
    products.forEach((shoe) => {
        document.querySelector('.table').innerHTML +=
        `
        <td>${shoe.id}</td>
        <td>${shoe.name}</td>
        <td>${shoe.brand}</td>
        <td>R${shoe.price}</td>
        <td><button onclick = "remove(${shoe.id})" id="delete"  type="button" class="btn btn-secondary">Del</button>
        <!-- Button trigger modal -->
<button type="button" class="btn btn-secondary" data-bs-toggle="modal" data-bs-target="#exampleModal">
  Edit
</button>

<!-- Modal -->
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5 text-dark" id="exampleModalLabel">Edit</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
      <div class="mb-3 row mt-4">
      <label for="inputSneaker" class="col-sm-2 col-form-label text-dark ps-4">Sneaker</label>
      <div class="col-sm-10">
        <input type="text" class="form-control" id="inputSneaker">
      </div>
    </div>
    <div class="mb-3 row">
      <label for="inputBrand" class="col-sm-2 col-form-label text-dark ps-4">Brand</label>
      <div class="col-sm-10">
        <input type="text" class="form-control" id="inputBrand">
      </div>
    </div>
    <div class="mb-3 row">
      <label for="inputPrice" class="col-sm-2 col-form-label text-dark ps-4">Price</label>
      <div class="col-sm-10">
        <input type="number" class="form-control" id="inputPrice">
      </div>
    </div>
      </div>
      <div class="mb-3 row">
      <label for="inputImage" class="col-sm-2 col-form-label text-dark ps-4">Image</label>
      <div class="col-sm-10">
        <input type="url" class="form-control" id="inputPrice">
      </div>
    </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="editButton btn btn-secondary">Save changes</button>
      </div>
    </div>
  </div>
</div>`
    })
    localStorage.setItem('products',JSON.stringify(products));      
};
editProducts();


let addButton = document.querySelector(".addButton")
addButton.addEventListener('click' , (e)=> {
  e.preventDefault()
  alert('Sneaker Has been added');
    let name = document.querySelector("#inputSneaker").value;
    let brand = document.querySelector("#inputBrand").value;
    let price = document.querySelector("#inputPrice").value;
    let image = document.querySelector("#inputImage").value;
    
    products.push({
      id: products.length +1,
        name ,
        brand,
        price,
        image
    })
    location.reload()
    localStorage.setItem('products',JSON.stringify(products));      
})

function remove(id) {
localStorage.setItem('products',JSON.stringify(products));
document.querySelector('#delete');
products.splice(id -1, 1)
localStorage.setItem('products',JSON.stringify(products))
location.reload()
}

// let editButton = document.querySelector(".editButton")
// addButton.addEventListener('click' , (e)=> {
//   e.preventDefault()
//     let name = document.querySelector("#inputSneaker").value;
//     let brand = document.querySelector("#inputBrand").value;
//     let price = document.querySelector("#inputPrice").value;
//     let image = document.querySelector("#inputImage").value;
//     products.shift({
//         name ,
//         brand,
//         price,
//         image
//     })
//     location.reload()
//     localStorage.setItem('products',JSON.stringify(products));      
// })


