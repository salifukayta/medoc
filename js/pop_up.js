/**
 * Created by Salifukayta on 26/10/2016.
 */

function div_show() {
    document.getElementById('abc').style.display = "block";
}
// Validating Empty Field
function check_empty() {
    if (document.getElementById('name').value == "" || document.getElementById('email').value == "" || document.getElementById('msg').value == "") {
        alert("Fill All Fields !");
    } else {
        document.getElementById('form').submit();
        alert("Form Submitted Successfully...");
    }
}
//Function to Hide Popup
function div_hide(){
    document.getElementById('abc').style.display = "none";
}
