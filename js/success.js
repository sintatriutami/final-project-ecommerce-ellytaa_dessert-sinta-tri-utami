// ============================
// AMBIL DATA STRUK
// ============================

let receipt = JSON.parse(localStorage.getItem("receipt"));

let div = document.getElementById("receipt");

let total = 0;

let html = "";

html += `

<p>

<b>Nama :</b>

${receipt.nama}

</p>

<p>

<b>No HP :</b>

${receipt.telepon}

</p>

<p>

<b>Alamat :</b>

${receipt.alamat}

</p>

<p>

<b>Pembayaran :</b>

${receipt.pembayaran}

</p>

<p>

<b>Tanggal :</b>

${receipt.tanggal}

</p>

<hr>

`;

receipt.items.forEach(item=>{

let subtotal=item.price*item.qty;

total+=subtotal;

html+=`

<p>

${item.name}

</p>

<p>

${item.qty} x Rp ${item.price.toLocaleString("id-ID")}

</p>

<p>

Subtotal :

Rp ${subtotal.toLocaleString("id-ID")}

</p>

<hr>

`;

});

div.innerHTML=html;

document.getElementById("totalStruk").innerHTML=

"TOTAL : Rp "+

total.toLocaleString("id-ID");