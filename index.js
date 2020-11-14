const express = require('express');
const app = express()


var paytm_func= require('./routes.js');
paytm_func(app);


var test= require('./test.js');
test(app);


app.listen(3000,(req,res)=>{
	console.log("server is running on port 3000");
})