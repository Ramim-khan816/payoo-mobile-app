function putVlaue(id){
  const inputField =  document.getElementById(id)
  const inputFieldVlaue = inputField.value
  const inputFieldVlaueNumber = parseInt(inputFieldVlaue) 
  return inputFieldVlaueNumber
}

function toggleVlaue(id){
  const togggleFeatures =  document.getElementById(id)
    
  return togggleFeatures
}


function getInnerText(id) {
  const innerElement = document.getElementById(id)
  const innerElementValue = innerElement.innerText
  const innerElementValueConverted= parseInt(innerElementValue)
  return innerElementValueConverted
}


function setInnerText(value) {
  const avilableBalanceElement = document.getElementById("main-money")
  avilableBalanceElement.innerText = value
}

const mainAccountNumber = 1234567890
const mainAgentNumber = 1919764171
const pin = 12345

document.getElementById("add-money-btn").addEventListener("click",function(e) {
    e.preventDefault()
     const bank = document.getElementById("select-bank").value

     const accountNumber =   putVlaue("account-number")

     const addAmount =  putVlaue("add-amount")

     const pinNumber =   putVlaue("enter-pin")

      if(mainAccountNumber === accountNumber && pin === pinNumber){
         
        console.log("money added");
        
      }
      else{
        alert("please provide a valid number & pin")
        return;
      }
       
      // if(pin !== pinNumber){
      //   alert("please provide a valid pin")
      //     return;
        
      // }
       

     const avilableBalance =   getInnerText("main-money")
      const newAvailableBalance = avilableBalance + addAmount

      setInnerText(newAvailableBalance)
       
      
     
     
})


document.getElementById("withdraw-money-btn").addEventListener("click", function(e){
  e.preventDefault()
  const agentNumber =   putVlaue("agent-number")
  
  

  const withdrawMoney =   putVlaue("withdraw-money")

  const pinNumber =   putVlaue("enter-withdraw-pin")

  const avilableBalance =   getInnerText("main-money")


  if(mainAgentNumber === agentNumber && pin === pinNumber){
    console.log("withdraw successfully");
    
  }
else{
  alert("provide a valid agent & pin number")
  return
}
  const newRemainingBalance = avilableBalance - withdrawMoney

   setInnerText(newRemainingBalance)


})


document.getElementById("add-button").addEventListener("click", function(){
  toggleVlaue("add-money-perants").style.display="block"

  toggleVlaue("cashout-perants").style.display= "none"
})

document.getElementById("cash-out-button").addEventListener("click", function(){
  toggleVlaue("cashout-perants").style.display="block"

  toggleVlaue("add-money-perants").style.display= "none"
})