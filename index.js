//b1
const income = parseInt(prompt('input salary:'))
let tax;
let income_after_tax;

if (income >= 15000000) {
    tax = 0.3 * income;
    income_after_tax = income - tax;
    console.log(`Income after tax: ${income_after_tax}, tax: ${tax}`);
}
else if (7000000 < income < 15000000) {
    tax = 0.2 * income;
    income_after_tax = income - tax;
    console.log(`Income after tax: ${income_after_tax}, tax: ${tax}`);
}
else {
    tax = 0.1 * income;
    income_after_tax = income - tax;
    console.log(`Income after tax: ${income_after_tax}, tax: ${tax}`);

}

//b5
// const income=prompt('nhap so tien')
// let commission;

// if(income <= 100000000){
//     commission= .05*income
//     console.log(commission);
// }
// else if (incom <=300000000){
//     commission= .1*income
//     console.log(commission);
// }
// else if(incom>300000000){
//     commission=.2*income
//     console.log(commission);
// }




//B2
// const age = prompt('Nhap vao tuoi')
// if (age >= 16){
//     console.log('Du dieu kien vao lop 10');
// }
// else {
//     console.log('Khong du dieu kien vao lop 10');
// }






//B3
// const num1 = prompt("Enter first number: ")
// const num2 = prompt("Enter second number: ")
// const num3 = prompt("Enter third number: ")
// let largest;

// if(num1 >= num2 && num1 >= num3) {
//     largest = num1;
// }
// else if (num2 >= num1 && num2 >= num3) {
//     largest = num2;
// }
// else {
//     largest = num3;
// }

// console.log("The largest number is " + largest);

//B4
// const DTB = prompt('Enter the mark: ')
// if (DTB < 5) {
//     console.log('F')
// } else if (DTB < 6.5) {
//     console.log('C')
// } else if (DTB < 8.0) {
//     console.log('B')
// } else if (DTB <= 9.0) {
//     console.log('A')
// }


//B6
// let root1, root2;
// let a = prompt("Enter the first number: ");
// let b = prompt("Enter the second number: ");
// let c = prompt("Enter the third number: ");

// let delta = b * b - 4 * a * c; //delta

// if (delta > 0) {
//     root1 = (-b + Math.sqrt(delta)) / (2 * a);
//     root2 = (-b - Math.sqrt(delta)) / (2 * a);

//     console.log(`The roots of quadratic equation are ${root1} and ${root2}`);
// }

// else if (delta == 0) {
//     root1 = root2 = -b / (2 * a);

//     console.log(`The roots of quadratic equation are ${root1} and ${root2}`);
// }

// else {
//     console.log(
//     'There are no roots'
//   );
// }