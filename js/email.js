/**
 * Created by safeki on 25/10/2016.
 */


$(function () {
	console.log("ready!");

	$("#submit").click(function (event) {
		var senderName = $("#name").val();
		var senderMail = $("#email").val();
		var mailContent = $("#msg").val();

		window.location.href = 'mailto:emna.mezghanni@gmail.com?subject=[Contact from Sequoia: ' + senderName + ']&cc=' + senderMail + '&body=' + mailContent;
		div_hide();
	});


	var encoderPourMail = function (texte) {
		// /\n/g représente '↵' (entré/saut de ligne)
		return texte.replace('%', '%25').replace('&', '%26').replace(/\n/g, '%0d');
	}


});
