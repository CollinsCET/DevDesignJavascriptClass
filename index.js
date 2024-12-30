// // numberData
// let numbers = 30
// // stringData
// let strings = `my name`
// // booleanData
// let boolean = false; true
// // camelCasing
// let myFavoriteMeal = `rice`

// // Arithemetic Expression

// // additionSubtractionArithemetic
// let one = 10 + 20
// let two = 60 - 50
// // let result = one * two
// // console.log(result);

// // increment Operator
// let number1 = 3
// number1 ++
// console.log(number1);

// // decrement Operator
// let number2 = 9
// number2 --
// console.log(number2);

// // Addition Assignment Operartor
// let a =60
// a -= 30
// console.log(a);

// Type Conversion
// let age = `60`
// age = Number(age)
// let result = age + 2
// console.log(result);

// Comparison Operator

// let myAge = prompt(`How old are you?`)
// myAge = Number(myAge);

// if (age >=50) {
//     alert(`You are not allowed to Enter!`);
// } 
// else{ 
//     alert(`You are welcome`);
    
// }

// // Concatenation
// let name = `Collins`
// let timing = `Morning`
// let accBalance = 200000
// let age = 28

// let result = `Good ${timing} ${name}, you have a balance of N${accBalance} and you are ${age} years old.`

// console.log(result);

// // Math object
// let number = 7.7
// let outcome = Math.ceil(number)

// console.log(outcome);

// let roundedNumber = Math.random() *100000
// roundedNumber = Math.floor (``)
// console.log(roundedNumber)

// let age = prompt(`How old are you?`)
// age = Number(age)
// let name = `Collins`
// if (age < 50) {
//     alert (`You are not allowed here`)
// }else{
//     alert (`You are welcome here Mr. ${name}`)
// // }

// let a = 4.9
// let b = Math.round(a)
// console.log(b);

// let c = Math.random()*100000000
// let d =Math.floor(c)
// console.log(d)

// let a = 60
// let b = 70
// let c = 50


// if (a < b) {
//     alert( `You Passed`)
// }else if (c < b) { 
//     alert( `You qualified`)
// }else{
//     alert(`try again`)
// }

// Object literals
// let employeeData ={
//     name:`Collins`,
//     gender:`Male`,
//     status: `Active`,
//     jobDescription: `Product Manager`,

//     laptopDetails: {
//         laptopName: `Macbook`,
//         laptopColor: `Black`,
//         laptopSize: `14inch`
//     }

// }
// // Adding data
// employeeData.stateOfOrign = `Enugu`
// employeeData.stateOfResidence = `Lagos`
// employeeData.salary = `200,000`
// employeeData.laptopDetails.laptopYear = `2024`

// // deleting data
// // // delete employeeData.gender 
// // employeeData.gender = `Male`
// // alert(employeeData)
// // delete employeeData.laptopDetails.laptopColor
// // alert(employeeData.laptopDetails.laptopColor)

// console.log(employeeData);

// Arrays

let shoppingList = [
    `Rice`,
    `Beans`,
    `Garri`,
    `Spag`,
    `Ugu`,
    `Tomato`,
    `Oil`,
]

shoppingList.push(`Crayfish`)
shoppingList.unshift(`Fish`)
// shoppingList.pop()
// shoppingList.shift()

shoppingList [0] = `Mouse`
console.log(shoppingList);
// console.log(shoppingList.slice(1,3))
// alert(shoppingList.slice(1,3))
// console.log(shoppingList);


// // function
// // Function declaration method
// function totalPrice(price1, price2, price3) {
//     price1 = 100
//     price2 = 30
//     price3 = 50

//     let totalPrice = price1 + price2 + price3
//     console.log(totalPrice)

// }
//  totalPrice()

// // Function Expression Method

// const accBalance = function (params) {
//     console.log(`Collins`)
// }
// accBalance()

// const accBalance2 = function(){
//     console.log(`Ogbe`)
// }
// accBalance2()

// function accBalance3 (params) {
//     // alert(`Onye anwuru`)
    
// }
// accBalance3()

// // Arrow Function

// const sendingMoney = ()=>{
//     let sender =`Collins`
//     let amount = 200
//     let receiver = `John`

//     return amount
// }

// let receivedAmount = sendingMoney()
// console.log(receivedAmount)

// // Function Parameters

// const verifyUserId = (nationalID)=>{
//     let username = `Collins`
//     let userNationalId = nationalID
//     let sentence = ` ${username} national Id is ${userNationalId}` 

//     return sentence
// }
// alert (verifyUserId(Math.ceil(Math.random()*100000000)))

// const totalPrice =(firstprice,others)=>{
//     let result = Number(firstprice) + Number(others)
//     return result
// }
// console.log(totalPrice(300,400))



const totalSupply = (first,second)=>{
    
    // let firstSupply = Number(prompt(`Enter first supply`))
    // let secondSupply = Number(prompt(`Enter second supply`))

    let total = first + second
    
    return total
}
console.log(totalSupply(20, 90))

const supply = (num1, num2)=>{
    // let first = prompt(`first number`)
    // let second = prompt(`second number`)
    let tootal= num1 + num2

    return tootal
}
console.log(supply(30,50))















