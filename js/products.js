/* =====================================
   ELLYTAA DESSERT
   PRODUCTS.JS
===================================== */

// ===============================
// AMBIL DATA PRODUK
// ===============================

let products = JSON.parse(localStorage.getItem("products")) || [];

let productList = document.getElementById("productList");
let cartCount = document.getElementById("cartCount");

// ===============================
// KERANJANG
// ===============================

let cart = JSON.parse(localStorage.getItem("cart")) || [];

cartCount.innerHTML = cart.length;

// ===============================
// TAMPILKAN PRODUK
// ===============================

function displayProducts(data){

    productList.innerHTML="";

    if(data.length==0){

        productList.innerHTML=`

        <h2 style="text-align:center;width:100%;color:#ff4d88;">

        Produk tidak ditemukan

        </h2>

        `;

        return;

    }

    data.forEach(product=>{

        productList.innerHTML +=`

        <div class="card">

        <span class="badge">

        Rp ${product.price.toLocaleString("id-ID")}

        </span>

        <button
        class="love"
        onclick="wishlist(${product.id})">

        ❤

        </button>

        <img src="${product.image}">

        <h3>${product.name}</h3>

        <p>

        ${product.rating}

        </p>

        <p>

        <b>Kategori :</b>

        ${product.category}

        </p>

        <p>

        <b>Stok :</b>

        ${product.stock}

        </p>

        <button
        class="buy"
        onclick="addCart(${product.id})">

        Tambah ke Keranjang

        </button>

        </div>

        `;

    });

}

displayProducts(products);

// ===============================
// SEARCH
// ===============================

document
.getElementById("search")
.addEventListener("keyup",function(){

let keyword=this.value.toLowerCase();

let hasil=products.filter(item=>

item.name.toLowerCase().includes(keyword)

);

displayProducts(hasil);

});

// ===============================
// FILTER KATEGORI
// ===============================

document
.getElementById("category")
.addEventListener("change",function(){

let kategori=this.value;

if(kategori=="Semua"){

displayProducts(products);

return;

}

let hasil=products.filter(item=>

item.category==kategori

);

displayProducts(hasil);

});

// ===============================
// TAMBAH KE KERANJANG
// ===============================

function addCart(id){

let produk=products.find(p=>p.id==id);

let ada=cart.find(item=>item.id==id);

if(produk.stock<=0){

alert("Stok habis");

return;

}

if(ada){

ada.qty++;

}else{

cart.push({

...produk,

qty:1

});

}

localStorage.setItem(

"cart",

JSON.stringify(cart)

);

cartCount.innerHTML=cart.length;

alert("Produk berhasil ditambahkan.");

}

// ===============================
// WISHLIST
// ===============================

function wishlist(id){

let wishlist=

JSON.parse(

localStorage.getItem("wishlist")

)||[];

let produk=

products.find(item=>item.id==id);

let sudahAda=

wishlist.some(item=>item.id==id);

if(sudahAda){

alert("Produk sudah ada di wishlist.");

return;

}

wishlist.push(produk);

localStorage.setItem(

"wishlist",

JSON.stringify(wishlist)

);

alert("Produk berhasil ditambahkan ke wishlist.");

}