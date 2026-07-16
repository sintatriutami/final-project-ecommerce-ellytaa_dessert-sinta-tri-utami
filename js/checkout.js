// =============================
// DATA
// =============================

let cart = JSON.parse(localStorage.getItem("cart")) || [];

let products = JSON.parse(localStorage.getItem("products")) || [];

let orders = JSON.parse(localStorage.getItem("orders")) || [];

// =============================
// TOTAL
// =============================

let total = 0;

cart.forEach(item=>{

total += item.price * item.qty;

});

document.getElementById("totalCheckout").innerHTML=

"Total : Rp "+

total.toLocaleString("id-ID");

// =============================
// CHECKOUT
// =============================

document.getElementById("checkoutForm")

.addEventListener("submit",function(e){

e.preventDefault();

let nama=

document.getElementById("nama").value;

let telepon=

document.getElementById("telepon").value;

let alamat=

document.getElementById("alamat").value;

let pembayaran=

document.getElementById("pembayaran").value;

// =============================
// KURANGI STOK
// =============================

cart.forEach(item=>{

let produk=

products.find(p=>p.id==item.id);

if(produk){

produk.stock -= item.qty;

}

});

// =============================
// SIMPAN PESANAN
// =============================

orders.push({

id:Date.now(),

nama,

telepon,

alamat,

pembayaran,

items:cart,

total,

tanggal:new Date().toLocaleString("id-ID")

});

localStorage.setItem(

"orders",

JSON.stringify(orders)

);

localStorage.setItem(

"products",

JSON.stringify(products)

);

// =============================
// DATA STRUK
// =============================

localStorage.setItem(

"receipt",

JSON.stringify({

nama,

telepon,

alamat,

pembayaran,

items:cart,

total,

tanggal:new Date().toLocaleString("id-ID")

})

);

// =============================
// KOSONGKAN KERANJANG
// =============================

localStorage.removeItem("cart");

// =============================

window.location="success.html";

});