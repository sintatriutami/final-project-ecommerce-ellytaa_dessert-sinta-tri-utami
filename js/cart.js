let cart = JSON.parse(localStorage.getItem("cart")) || [];

let container = document.getElementById("cart-container");

let totalHarga = document.getElementById("totalHarga");

let cartCount = document.getElementById("cartCount");

cartCount.innerHTML = cart.length;

function tampilKeranjang(){

container.innerHTML="";

let total=0;

if(cart.length==0){

container.innerHTML=`

<h2 style="text-align:center;width:100%;">

Keranjang masih kosong.

</h2>

`;

totalHarga.innerHTML="Rp 0";

return;

}

cart.forEach((item,index)=>{

let subtotal=item.price*item.qty;

total+=subtotal;

container.innerHTML+=`

<div class="card">

<img src="${item.image}">

<h3>${item.name}</h3>

<p>

Harga :

Rp ${item.price.toLocaleString("id-ID")}

</p>

<p>

Jumlah :

${item.qty}

</p>

<p>

Subtotal :

Rp ${subtotal.toLocaleString("id-ID")}

</p>

<div style="display:flex;gap:10px;padding:15px;">

<button class="buy"

onclick="kurang(${index})">

-

</button>

<button class="buy"

onclick="tambah(${index})">

+

</button>

<button class="delete"

onclick="hapus(${index})">

Hapus

</button>

</div>

</div>

`;

});

totalHarga.innerHTML=

"Total : Rp "+

total.toLocaleString("id-ID");

}

tampilKeranjang();

function tambah(index){

cart[index].qty++;

localStorage.setItem(

"cart",

JSON.stringify(cart)

);

tampilKeranjang();

}

function kurang(index){

if(cart[index].qty>1){

cart[index].qty--;

}else{

cart.splice(index,1);

}

localStorage.setItem(

"cart",

JSON.stringify(cart)

);

cartCount.innerHTML=cart.length;

tampilKeranjang();

}

function hapus(index){

cart.splice(index,1);

localStorage.setItem(

"cart",

JSON.stringify(cart)

);

cartCount.innerHTML=cart.length;

tampilKeranjang();

}