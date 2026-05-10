document.getElementById('loginbtn').addEventListener('click', function(e){
    e.preventDefault()
    console.log("login successfully")
    const mobileNumber = 1234567890
    const pinNumber = 1234
    const mobileNumberValue = document.getElementById("mobile-number").value

    const mobileNumberValueConverted = parseInt(mobileNumberValue)

     

    const pinNumberValue =document.getElementById("pin-num").value

    const pinNumberValueConverted = parseInt(pinNumberValue)

     
    

if(mobileNumberValueConverted === mobileNumber &&  pinNumberValueConverted === pinNumber){
         window.location.href="main.html"
        }

    

else{
        alert("invalid credentials")
    }
})

