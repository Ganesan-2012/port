showMenu('nav-toggle','nav-menu')

var typed = new Typed((".skills"),{
    strings : ["Frontend Developer","UI/UX Designer","Grapic Designer"],
    typeSpeed : 10,
    backSpeed : 0,
    backDelay : 1000,
    loop : true
})





function sendemail(){

	var email=document.getElementById("Email").value;
	var from_name=document.getElementById("Name").value;
	var message=document.getElementById("Message").value;

	var templateParams = {
        email: email,
        to_name: Name, 
		message: message
      };

      emailjs.send('service_qa5k1ig', 'template_hf7h92w', templateParams)
  .then(function(response) {
     console.log('SUCCESS!', response.status, response.text);
     window.alert("Sent successfully!");
     
  })

     
}
      