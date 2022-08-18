document.querySelector(".container .btn").addEventListener("click",function(){
	document.querySelector(".popup").classList.add("active");
});
document.querySelector(".popup .close-btn").addEventListener("click",function(){
	document.querySelector(".popup").classList.remove("active");
});
var username = document.getElementById('username');
var password = document.getElementById('password');
var email = document.getElementById('email');
$('#submission').click(()=>{
	let valid=true
	let name=username.value
	if (name.length<3){
		valid=valid&false
		$('.small').text('Invalid username');
		$('.small').css('visibility','visible');
		$('.small').css('color','red');
	}
	let mail=email.value
	if (mail.search('@gmail.com')==-1){
		valid=valid&false
		$('.small').innertext('Invalid email');
		$('.small').css('visibility','visible');
		$('.small').css('color','red');
	}
	if (valid==true){
		$('.small').text('')
		$('.small').text('')
		$('#box').removeClass('show')
	}
})