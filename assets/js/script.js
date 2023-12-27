function sendMail() {
  var params = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    message: document.getElementById("message").value,
    phone: document.getElementById("phone").value
  };

  const serviceID = "service_zct320s";
  const templateID = "template_kmhfvpf";

    emailjs.send(serviceID, templateID,params)
    .then(res=>{
        document.getElementById("name").value = "";
        document.getElementById("phone").value = "";
        document.getElementById("email").value = "";
        document.getElementById("message").value = "";
        console.log(res);
        alert("Your message sent successfully!!")

    })
    .catch(err=>console.log(err));

}

function doSlowFade(){
  topnav = document.getElementById("myTopnav");
  firstHeader = document.getElementById("FirstHeader");
  coverPhoto = document.getElementById("CoverPhotoHeader");
  
  topnav.style.visibility = "visible";
  firstHeader.style.visibility = "visible";
  coverPhoto.style.visibility = "visible";
  if(window.scrollY < 600)
  {
    topnav.classList.add("slow-fade");
    firstHeader.classList.add("slow-fade");
    coverPhoto.classList.add("slow-fade");
  }
}