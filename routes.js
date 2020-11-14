const checksum= require('./PaytmChecksum');
const Paytm = require('paytmchecksum');
const port = 3000;

module.exports=(app)=>{
	app.get('/payment',(req,res)=>{
		let params={};
		params['MID']='Iqujtp38397883699577',
		params['WEBSITE']='WEBSTAGING',
		params['CHANNEL_ID']='WEB',
		params['INDUSTRY_TYPE_ID']='RETAIL',
		params['ORDER_ID']='ord_65',
		params['CUST_ID']='cust_55',
		params['TXN_AMOUNT']='330',
		params['CALLBACK_URL']='srisitaramviavahbhawan.com',
		params['EMAIL']='codexcoc@gmail.com',
		params['MOBILE_NO']='8235188063'
		
		Paytm.generateSignature(params,'I0MuDY7kmAZ&gJIv',(err,checksum)=>{
			let txn_url = "https://securegw-stage.paytm.in/order/process";
			let formFields="";
			for(x in params){
				formFields+="<input type='hidden' name='"+x+"' value='"+params[x]+"'/>"
			}
			
			formFields+="<input type='hidden' name='CHECKSUMHASH' value='"+checksum+"'>"
	
			
			
			var html = '<html><body><center>Please Wait! Do Not Refresh the Page</center><form method="post" action="'+txn_url+'" name="paymentForm">'+formFields+'</form><script type="text/javascript">document.paymentForm.submit()</script></body></html>'
			res.writeHead(200,{'Content-Type':'text/html'});
			res.write(html);
			res.end();
		
		})
		
	})
}