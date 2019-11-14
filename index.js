//index.js
function sendEmail() {

	// ok let's get this emial thing working gosh darn it  -->
	// 99200a94-dbb8-4109-8ec0-3c7418754f5d -->
	//  developer keys? i dont see any developer keys -->
	<script>
	Email.send({
	    SecureToken : "99200a94-dbb8-4109-8ec0-3c7418754f5d"
	    // To : 'joseph.cobb@shieldmarketingsolutions.com',
			To : 'js.wubbenhorst@gmail.com',
	    From : "yomama@gmail.com",
	    Subject : "This is the subject",
	    Body : "And this is the body"
	}).then(
	  message => alert(message)
	);
	</script>


	// Email.send({
	// Host: "smtp.gmail.com",
	// Username : "<sender’s email address>",
	// Password : "<email password>",
	// To : '<recipient’s email address>',
	// From : "<sender’s email address>",
	// Subject : "<email subject>",
	// Body : "<email body>",
	// }).then(
	// 	message => alert("mail sent successfully")
	// );
}
