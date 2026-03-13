
// MongoDB example schema for ReUseMart

db.users.insertOne({
 name:"Sanket",
 email:"user@example.com",
 password:"hashedpassword"
})

db.products.insertOne({
 name:"Used Laptop",
 price:30000,
 category:"Electronics",
 seller:"userId"
})
