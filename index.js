//index.js
function sendEmail() {

	// ok let's get this emial thing working gosh darn it  -->
	// 19a6dc8b-b7c3-4cf2-b367-a71098abe4af -->
	//  developer keys? i dont see any developer keys -->
	<script>
	Email.send({
	    Host : "smtp.mail.yahoo.com",
	    Username : "jswu66@yahoo.com",
	    Password : "J5wYah00UGH",
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
