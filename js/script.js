/* =====================================
   ELLYTAA DESSERT
   script.js
===================================== */

// ==============================
// LOADING
// ==============================

window.onload = function () {

    setTimeout(() => {

        document.getElementById("loading").style.display = "none";

    }, 1000);

};

// ==============================
// SLIDER
// ==============================

let slides = document.querySelectorAll(".slide");

let index = 0;

function slider() {

    slides.forEach(slide => {

        slide.classList.remove("active");

    });

    index++;

    if (index >= slides.length) {

        index = 0;

    }

    slides[index].classList.add("active");

}

if (slides.length > 0) {

    setInterval(slider, 3000);

}

// ==============================
// FAQ
// ==============================

let faq = document.querySelectorAll(".faq-btn");

faq.forEach(btn => {

    btn.onclick = function () {

        let isi = this.nextElementSibling;

        if (isi.style.display == "block") {

            isi.style.display = "none";

        } else {

            isi.style.display = "block";

        }

    }

});

// ==============================
// DATA PRODUK DEFAULT
// ==============================

let defaultProducts = [

{
id:1,
name:"Chocolate Lava Cake",
price:75000,
stock:20,
category:"Cake",
image:"images/p1.jpg",
rating:"★★★★★"
},

{
id:2,
name:"Tiramisu",
price:65000,
stock:18,
category:"Cake",
image:"images/p2.jpg",
rating:"★★★★★"
},

{
id:3,
name:"Mini Donut Box",
price:50000,
stock:25,
category:"Donut",
image:"images/p3.jpg",
rating:"★★★★☆"
},

{
id:4,
name:"Rainbow Macaron",
price:95000,
stock:15,
category:"Macaron",
image:"images/p4.jpg",
rating:"★★★★★"
},

{
id:5,
name:"Mango Pudding",
price:40000,
stock:30,
category:"Pudding",
image:"images/p5.jpg",
rating:"★★★★☆"
},

{
id:6,
name:"Almond Cookies",
price:55000,
stock:22,
category:"Cookies",
image:"images/p6.jpg",
rating:"★★★★★"
},

{
id:7,
name:"Choco Chip Cookies",
price:50000,
stock:25,
category:"Cookies",
image:"images/p7.jpg",
rating:"★★★★★"
},

{
id:8,
name:"Cheesecake",
price:85000,
stock:15,
category:"Cake",
image:"images/p8.jpg",
rating:"★★★★★"
},

{
id:9,
name:"Red Velvet Cake",
price:90000,
stock:14,
category:"Cake",
image:"images/p9.jpg",
rating:"★★★★★"
},

{
id:10,
name:"Brownies",
price:60000,
stock:20,
category:"Cake",
image:"images/p10.jpg",
rating:"★★★★☆"
},

{
id:11,
name:"Fruit Tart",
price:55000,
stock:18,
category:"Tart",
image:"images/p11.jpg",
rating:"★★★★★"
},

{
id:12,
name:"Cupcake",
price:35000,
stock:40,
category:"Cake",
image:"images/p12.jpg",
rating:"★★★★☆"
},

{
id:13,
name:"Croissant",
price:30000,
stock:25,
category:"Bread",
image:"images/p13.jpg",
rating:"★★★★☆"
},

{
id:14,
name:"Eclair",
price:45000,
stock:16,
category:"Pastry",
image:"images/p14.jpg",
rating:"★★★★★"
},

{
id:15,
name:"Strawberry Mille Crepe",
price:85000,
stock:12,
category:"Cake",
image:"images/p15.jpg",
rating:"★★★★★"
}

];

// ==============================
// SIMPAN KE LOCALSTORAGE
// ==============================

if(localStorage.getItem("products")==null){

localStorage.setItem(

"products",

JSON.stringify(defaultProducts)

);

}

// ==============================
// BEST SELLER
// ==============================

let best = document.getElementById("bestProduct");

if(best){

let products = JSON.parse(localStorage.getItem("products"));

products.slice(0,4).forEach(item=>{

best.innerHTML +=`

<div class="card">

<span class="badge">
Best Seller
</span>

<img src="${item.image}">

<h3>${item.name}</h3>

<p>${item.rating}</p>

<p>

Rp ${item.price.toLocaleString("id-ID")}

</p>

<a href="products.html">

<button class="buy">

Lihat Produk

</button>

</a>

</div>

`;

});

}

// ==============================
// CART COUNT
// ==============================

let cart = JSON.parse(

localStorage.getItem("cart")

) || [];

let cartCount = document.getElementById("cartCount");

if(cartCount){

cartCount.innerHTML = cart.length;

}

// ==============================
// ANIMASI SCROLL PRODUK
// ==============================

const revealElements = document.querySelectorAll(
".card, .service, .about, .featured, .faq"
);


window.addEventListener("scroll",()=>{


revealElements.forEach(el=>{


let posisi = el.getBoundingClientRect().top;


let tinggiLayar = window.innerHeight;


if(posisi < tinggiLayar - 100){

el.classList.add("show");


}


});


});




// ==============================
// RATING BINTANG KUNING
// ==============================


document.querySelectorAll(".rating, .card p").forEach(item=>{


if(item.innerHTML.includes("★")){

item.style.color="#FFD700";

item.style.fontSize="22px";


}


});
