/* import checksum generation utility */
var PaytmChecksum = require("./PaytmChecksum");


const port = 3000;

module.exports=(app)=>{
	app.get('/test',(req,res)=>{
		var paytmParams = {};

/* initialize an array */
		paytmParams['MID']='Iqujtp38397883699577',
		paytmParams['WEBSITE']='WEBSTAGING',
		paytmParams['CHANNEL_ID']='WEB',
		paytmParams['INDUSTRY_TYPE_ID']='RETAIL',
		paytmParams['ORDER_ID']='ord_6895',
		paytmParams['CUST_ID']='cust_55',
		paytmParams['TXN_AMOUNT']='330',
		paytmParams['CALLBACK_URL']='http://srisitaramviavahbhawan.com/callback',
		paytmParams['EMAIL']='codexcoc@gmail.com',
		paytmParams['MOBILE_NO']='8235188063'

		var paytmChecksum = PaytmChecksum.generateSignature(paytmParams, "I0MuDY7kmAZ&gJIv");
		paytmChecksum.then(function(checksum){
			console.log("generateSignature Returns: " + checksum);
			
			let txn_url = "https://securegw-stage.paytm.in/order/process";
			let formFields="";
			for(x in paytmParams){
				formFields+='<input type="hidden" name="'+x+'" value="'+paytmParams[x]+'"/>'
			}
			
			formFields+='<input type="hidden" name="CHECKSUMHASH" value="'+checksum+'">'
	
			var html = '<html><body><center>Please Wait! Do Not Refresh the Page</center><form method="POST" action="'+txn_url+'" name="paymentForm">'+formFields+'</form><script>document.paymentForm.submit()</script></body></html>'
			res.writeHead(200,{'Content-Type':'text/html'});
			res.write(html);
			res.end();
	
		}).catch(function(error){
		console.log(error);
		});
});
}