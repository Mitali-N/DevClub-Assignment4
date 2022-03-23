const http = require("http");

const SECRET = "CIGAR"; // You can set any word as the secret answer

function myFunction(req, res) {
	// console.log({req}); // You can uncomment this to see the request object
	//console.log(req.url);

	const GUESS = req.url.split('q=')[1]; // Write logic to parse the word which the user guessed from the URL string
	//console.log(req.url.split('q=')[1]);
	//console.log(typeof(GUESS));
	let feedback='';

	if (typeof(GUESS)=='string' && GUESS.length==5){
		let str='';
		// Write logic to compare the word with the secret, and generate the feedback string
		for (let i=0; i<5; i++) { 
			let flag=0;
			for (let j=0; j<5; j++){
				if (GUESS[i]== SECRET[j] && i==j){
					str=str+'g';
					flag=1;
					break;
				}
				else if (GUESS[i]== SECRET[j] && i!=j){
					str=str+'y';
					flag=1;
					break;
				}
			}
			if (flag==0){
				str=str+'b';
			}
		}
	feedback = str;
	}
	
	else
	{
		feedback = "please enter valid guess";
	}

	res.write(feedback);
	res.end();
}

http.createServer(myFunction).listen(8080);
