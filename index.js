const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000

function add(a,b){
	return a + b;
}

console.log("Sum is = ", add(2,3));

app.get("/", (req,res)=>{
	let val = add(2,3);
	res.send(val);
});

app.listen(PORT);
