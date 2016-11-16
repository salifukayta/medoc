/**
 * Created by safeki on 25/10/2016.
 */


$(function () {
	console.log("ready!");

	$("#submit").click(function (event) {
		var destinationEmail = "info@sequoia-medical.com";
		var senderName = $("#name").val();
		var senderMail = $("#email").val();
		var mailContent = $("#msg").val();

		window.location.href = 'mailto:' + destinationEmail + '?subject=[Contact from Sequoia: ' + senderName + ']&bcc=' + senderMail + '&body=' + mailContent;
		div_hide();
		copiMailToClipBoard(destinationEmail);
	});


	var encoderPourMail = function (texte) {
		// /\n/g représente '↵' (entré/saut de ligne)
		return texte.replace('%', '%25').replace('&', '%26').replace(/\n/g, '%0d');
	}

	var copiMailToClipBoard = function(destinationEmail) {
		// create hidden text element, if it doesn't already exist
		var targetId = "_hiddenCopyText_";
		// must use a temporary form element for the selection and copy
		var targetToCopy = document.createElement("textarea");
		targetToCopy.style.position = "absolute";
		targetToCopy.style.left = "-9999px";
		targetToCopy.style.top = "0";
		targetToCopy.id = targetId;
		document.body.appendChild(targetToCopy);
		targetToCopy.textContent = destinationEmail;

		// select the content
		var savedFocus = document.activeElement;
		targetToCopy.focus();
		targetToCopy.setSelectionRange(0, targetToCopy.value.length);

		// copy the selection
		try {
			succeed = document.execCommand('copy');
			toastr.info(destinationEmail + ' is copied to your clipBoard')
		} catch(e) {
			console.error('Copie to the clipBoard faild');
		}
		// restore original focus
		if (savedFocus && typeof savedFocus.focus === "function") {
			savedFocus.focus();
		}

		targetToCopy.remove();
	}


});
