// =======================
// LOGIN
// =======================

if(localStorage.getItem("adminLogin")!="true"){

location="admin-login.html";

}

// =======================
// DATA
// =======================

let orders=JSON.parse(localStorage.getItem("orders"))||[];

let table=document.getElementById("orderTable");

// =======================
// TAMPILKAN
// =======================

function tampilPesanan(){

table.innerHTML="";

if(orders.length==0){

table.innerHTML=`

<tr>

<td colspan="7">

Belum ada pesanan.

</td>

</tr>

`;

return;

}

orders.forEach((item,index)=>{

table.innerHTML+=`

<tr>

<td>${index+1}</td>

<td>${item.nama}</td>

<td>${item.telepon}</td>

<td>${item.pembayaran}</td>

<td>

Rp ${item.total.toLocaleString("id-ID")}

</td>

<td>

${item.tanggal}

</td>

<td>

<button

class="edit"

onclick="lihat(${index})">

Detail

</button>

<button

class="buy"

onclick="printStruk(${index})">

Cetak

</button>

</td>

</tr>

`;

});

}

tampilPesanan();

// =======================
// DETAIL
// =======================

function lihat(index){

let order=orders[index];

let teks="";

order.items.forEach(item=>{

teks+=

item.name+

" x "+

item.qty+

"\n";

});

alert(

"Nama : "+order.nama+

"\n\nNo HP : "+order.telepon+

"\n\nAlamat : "+order.alamat+

"\n\nPembayaran : "+order.pembayaran+

"\n\nProduk :\n"+teks+

"\n\nTotal : Rp "+order.total.toLocaleString("id-ID")

);

}

// =======================
// CETAK
// =======================

function printStruk(index){

localStorage.setItem(

"receipt",

JSON.stringify(orders[index])

);

window.open("success.html","_blank");

}

// =======================
// LOGOUT
// =======================

function logout(){

localStorage.removeItem("adminLogin");

location="admin-login.html";

}