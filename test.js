const fs = require('fs');

if (fs.existsSync("app.js")){
  console.log("app.js exists!")
} else {
  throw new Error("Create app.js!")
}
if (fs.existsSync("admin-4.html")){
  console.log("admin-4.html exists!")
} else {
  throw new Error("Create admin-4.html!")
}
if (fs.existsSync("images/")){
  console.log("images exists!")
} else {
  throw new Error("Create images!")
}
