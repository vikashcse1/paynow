/* More Details: https://developer.paytm.com/docs/checksum/#node */

var PaytmChecksum = require("./PaytmChecksum");

var paytmParams = {};

/* Generate Checksum via Array */

/* initialize an array */
paytmParams["MID"] = "Iqujtp38397883699577";
paytmParams["ORDERID"] = "aa11";

/**
* Generate checksum by parameters we have
* Find your Merchant Key in your Paytm Dashboard at https://dashboard.paytm.com/next/apikeys 
*/
var paytmChecksum = PaytmChecksum.generateSignature(paytmParams, "I0MuDY7kmAZ&gJIv");
paytmChecksum.then(function(result){
	console.log("generateSignature Returns: " + result);
	var verifyChecksum =  PaytmChecksum.verifySignature(paytmParams, "I0MuDY7kmAZ&gJIv",result);
	console.log("verifySignature Returns: " + verifyChecksum);
}).catch(function(error){
	console.log(error);
});

/* Generate Checksum via String */

/* initialize JSON String */ 
body = "{\"mid\":\"Iqujtp38397883699577\",\"orderId\":\"aa11\"}"

/**
* Generate checksum by parameters we have
* Find your Merchant Key in your Paytm Dashboard at https://dashboard.paytm.com/next/apikeys 
*/
var paytmChecksum = PaytmChecksum.generateSignature(body, "I0MuDY7kmAZ&gJIv");
paytmChecksum.then(function(result){
	console.log("generateSignature Returns: " + result);
	var verifyChecksum =  PaytmChecksum.verifySignature(body, "I0MuDY7kmAZ&gJIv",result);
	console.log("verifySignature Returns: " + verifyChecksum);
}).catch(function(error){
	console.log(error);
});