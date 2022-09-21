let bill = document.getElementById('billAmount')

let tip = document.getElementById('tipInput')
 
let persons = document.getElementById('noOfPersons')
 let personsNumber = Number(noOfPersons.innerText)

 let amount = document.getElementById('totalAmount')

const calculateBill = () =>{
  let billNumber = Number(billAmount.value)
  let tipPercentage = Number(tipInput.value)/100
  let tipAmount = billNumber * tipPercentage
  let  totalBill = billNumber + tipAmount
  let perPerson = totalBill/personsNumber
  totalAmount.innerText = `₹${perPerson.toFixed(2)}`
}
 const increasePeople = () =>{
    personsNumber = personsNumber + 1
    noOfPersons.innerText = personsNumber
    calculateBill()
 }
 const decreasePeople = () =>{
    if (personsNumber<=1){
        throw "Hey! No Of Persons Cant Be Less Than 1"
        return
    }
    personsNumber = personsNumber - 1
    noOfPersons.innerText = personsNumber
    calculateBill()

 }
