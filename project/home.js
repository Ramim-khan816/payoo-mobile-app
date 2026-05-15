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

function HandleToggle(id){
  const forms = document.getElementsByClassName("form")
  for(const form of forms){
    form.style.display = "none"
  }
  toggleVlaue(id).style.display="block"
}

const transationData = []

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
       
    const data = {
      name: "Add Money",
      date: new Date().toLocaleTimeString()
    }  
     
     transationData.push(data)
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
      
   const data = {
      name: "Cash Out",
      date: new Date().toLocaleTimeString()
    }  
     
     transationData.push(data)

})


document.getElementById("transactions-button").addEventListener("click", function () {
   
  const transactionCont = document.getElementById("transactions-cont")
  transactionCont.innerText = ""
  for(const data of transationData){
    const div = document.createElement("div")
    div.innerHTML = `
    <div class=" flex bg-white justify-between items-center rounded-2xl mt-2">
                     <div class="flex items-center rounded-2xl p-4">
                     <div class="p-2 m-2 rounded-4xl bg-[#f4f5f7]">
                        <img src="./assets/wallet1.png" alt="">
                     </div>

                    <div class="">
                        <h1 class="font-semibold">${data.name}</h1>
                        <p>${data.date}</p>
                    </div>

                     
                </div>

                   <i class="fa-solid fa-ellipsis p-4"></i>

                </div>
    `

    transactionCont.appendChild(div)
  }


  
})


document.getElementById("add-button").addEventListener("click", function(){
   HandleToggle("add-money-perants")



   const formBtns = document.getElementsByClassName("from-btn")

   for(const btns of formBtns){
    btns.classList.remove("border-[#0874f2]", "bg-[#0874f20d")
    btns.classList.add("border-gray-300")
   }

  document.getElementById("add-button").classList.remove("border-gray-300")
  document.getElementById("add-button").classList.add("border-[#0874f2]", "bg-[#0874f20d")
});

document.getElementById("cash-out-button").addEventListener("click", function(){
   HandleToggle("cashout-perants")
    
})

document.getElementById("transfer-money-button").addEventListener("click", function(){
   HandleToggle("Transfer-money-perants")

   const data = {
      name: "Cash Out",
      date: new Date().toLocaleTimeString()
    }  
     
     transationData.push(data)
})

document.getElementById("get-bonus-button").addEventListener("click", function(){
   HandleToggle("get-bonus-perants")
   
})

document.getElementById("pay-bill-button").addEventListener("click", function(){
   HandleToggle("pay-bill-perants")
})

document.getElementById("transactions-button").addEventListener("click", function(){
  
   HandleToggle("transaction-perants")
})


 