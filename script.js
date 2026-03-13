
async function loadProducts(){
let res = await fetch("http://localhost:5000/products");
let data = await res.json();

let html="";
data.forEach(p=>{
html+=`<div class="card">
<b>${p.name}</b><br>
Price: ₹${p.price}
</div>`
});

document.getElementById("products").innerHTML=html;
}

async function sell(){
let name=document.getElementById("name").value;
let price=document.getElementById("price").value;

await fetch("http://localhost:5000/products",{
method:"POST",
headers:{"Content-Type":"application/json"},
body:JSON.stringify({name,price})
});

alert("Product listed!");
loadProducts();
}

loadProducts();
