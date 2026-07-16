/* =====================================
   ADMIN.JS
   Ellytaa Dessert
===================================== */

// ===========================
// CEK LOGIN
// ===========================

if(localStorage.getItem("adminLogin")!="true"){

    window.location="admin-login.html";

}

// ===========================
// DATA
// ===========================

let products = JSON.parse(localStorage.getItem("products")) || [];
let orders = JSON.parse(localStorage.getItem("orders")) || [];

const produkTable = document.getElementById("produkTable");

// ===========================
// DASHBOARD
// ===========================

function dashboard(){

    document.getElementById("totalProduk").innerHTML = products.length;

    document.getElementById("totalPesanan").innerHTML = orders.length;

    let total = 0;

    orders.forEach(order=>{

        total += order.total;

    });

    document.getElementById("pendapatan").innerHTML =
    "Rp " + total.toLocaleString("id-ID");

}

dashboard();

// ===========================
// TAMPILKAN PRODUK
// ===========================

function tampilProduk(){

    produkTable.innerHTML="";

    products.forEach((item,index)=>{

        produkTable.innerHTML += `

        <tr>

        <td>${item.name}</td>

        <td>Rp ${item.price.toLocaleString("id-ID")}</td>

        <td>${item.category}</td>

        <td>${item.stock}</td>

        <td>

        <button
        class="edit"
        onclick="editProduk(${index})">

        Edit

        </button>

        <button
        class="delete"
        onclick="hapusProduk(${index})">

        Hapus

        </button>

        </td>

        </tr>

        `;

    });

}

tampilProduk();

// ===========================
// TAMBAH PRODUK
// ===========================

function tambahProduk(){

    let nama = document.getElementById("nama").value;
    let harga = Number(document.getElementById("harga").value);
    let kategori = document.getElementById("kategori").value;
    let stok = Number(document.getElementById("stok").value);
    let gambar = document.getElementById("gambar").value;
    let deskripsi = document.getElementById("deskripsi").value;

    if(
        nama=="" ||
        harga==0 ||
        kategori=="" ||
        stok==0 ||
        gambar==""
    ){

        alert("Lengkapi data produk.");

        return;

    }

    products.push({

        id:Date.now(),

        name:nama,

        price:harga,

        category:kategori,

        stock:stok,

        image:gambar,

        description:deskripsi,

        rating:"★★★★★"

    });

    localStorage.setItem(

        "products",

        JSON.stringify(products)

    );

    alert("Produk berhasil ditambahkan.");

    location.reload();

}

// ===========================
// HAPUS
// ===========================

function hapusProduk(index){

    if(confirm("Hapus produk ini?")){

        products.splice(index,1);

        localStorage.setItem(

            "products",

            JSON.stringify(products)

        );

        tampilProduk();

        dashboard();

    }

}

// ===========================
// EDIT
// ===========================

function editProduk(index){

    let produk = products[index];

    let nama = prompt("Nama Produk",produk.name);

    if(nama==null) return;

    let harga = prompt("Harga",produk.price);

    if(harga==null) return;

    let kategori = prompt("Kategori",produk.category);

    if(kategori==null) return;

    let stok = prompt("Stok",produk.stock);

    if(stok==null) return;

    produk.name = nama;
    produk.price = Number(harga);
    produk.category = kategori;
    produk.stock = Number(stok);

    localStorage.setItem(

        "products",

        JSON.stringify(products)

    );

    tampilProduk();

    alert("Produk berhasil diperbarui.");

}

// ===========================
// LOGOUT
// ===========================

function logout(){

    localStorage.removeItem("adminLogin");

    window.location="admin-login.html";

}