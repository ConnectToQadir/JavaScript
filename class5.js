// Function
// To make your code reuseable and simple
// there 2 types of functions in JS
// 1. simple function
// 2. arrow function ( advanced and latest )




// Fuction Defination
function sum(a, b, c) {
    return a + b + c
}




// // Calling of function

// var s = sum(26, 4, 3)

// console.log(s)

// var data = { rollNo: 1, name: "Ali Raza", urdu: 67, english: 65, math: 98 }

var data = [
    { rollNo: 4344, name: "Ghulam Qadir", urdu: 76, english: 67, math: 67 },
    { rollNo: 4345, name: "Shahbaz", urdu: 97, english: 95, math: 98 },
    { rollNo: 4346, name: "Ashar", urdu: 77, english: 65, math: 98 },
    { rollNo: 4347, name: "Muhib", urdu: 67, english: 95, math: 48 },
    { rollNo: 4348, name: "Abdul Qadir", urdu: 67, english: 35, math: 98 },
    { rollNo: 4349, name: "Zain", urdu: 77, english: 65, math: 58 },
    { rollNo: 4349, name: "Zain", urdu: 77, english: 65, math: 58 },
    { rollNo: 4349, name: "Zain", urdu: 77, english: 65, math: 58 },
    { rollNo: 4349, name: "Zain", urdu: 77, english: 65, math: 58 },
    { rollNo: 4349, name: "Zain", urdu: 77, english: 65, math: 58 },
    { rollNo: 4349, name: "Zain", urdu: 77, english: 65, math: 58 },
    { rollNo: 4349, name: "Zain", urdu: 77, english: 65, math: 58 },
    { rollNo: 4349, name: "Zain", urdu: 77, english: 65, math: 58 },
    { rollNo: 4349, name: "Zain", urdu: 77, english: 65, math: 58 },
    { rollNo: 4349, name: "Zain", urdu: 77, english: 65, math: 58 },
    { rollNo: 4349, name: "Zain", urdu: 77, english: 65, math: 58 },
    { rollNo: 4349, name: "Zain", urdu: 77, english: 65, math: 58 },
    { rollNo: 4349, name: "Zain", urdu: 77, english: 65, math: 58 },
    { rollNo: 4349, name: "Zain", urdu: 77, english: 65, math: 58 },
    { rollNo: 4349, name: "Zain", urdu: 77, english: 65, math: 58 },
    { rollNo: 4349, name: "Zain", urdu: 77, english: 65, math: 58 },
    { rollNo: 4349, name: "Zain", urdu: 77, english: 65, math: 58 },
    { rollNo: 4349, name: "Zain", urdu: 77, english: 65, math: 58 },
    { rollNo: 4349, name: "Zain", urdu: 77, english: 65, math: 58 },
    { rollNo: 4349, name: "Zain", urdu: 77, english: 65, math: 58 },
    { rollNo: 4349, name: "Zain", urdu: 77, english: 65, math: 58 },
    { rollNo: 4349, name: "Zain", urdu: 77, english: 65, math: 58 },
    { rollNo: 4349, name: "Zain", urdu: 77, english: 65, math: 58 },
    { rollNo: 4349, name: "Zain", urdu: 77, english: 65, math: 58 },
    { rollNo: 4349, name: "Zain", urdu: 77, english: 65, math: 58 },
    { rollNo: 4349, name: "Zain", urdu: 77, english: 65, math: 58 },
    { rollNo: 4349, name: "Zain", urdu: 77, english: 65, math: 58 },
    { rollNo: 4349, name: "Zain", urdu: 77, english: 65, math: 58 },
    { rollNo: 4349, name: "Zain", urdu: 77, english: 65, math: 58 },
    { rollNo: 4349, name: "Zain", urdu: 77, english: 65, math: 58 },
    { rollNo: 4349, name: "Zain", urdu: 77, english: 65, math: 58 },
    { rollNo: 4349, name: "Zain", urdu: 77, english: 65, math: 58 },
    { rollNo: 4349, name: "Zain", urdu: 77, english: 65, math: 58 },
    { rollNo: 4349, name: "Zain", urdu: 77, english: 65, math: 58 },
    { rollNo: 4349, name: "Zain", urdu: 77, english: 65, math: 58 },
    { rollNo: 4349, name: "Zain", urdu: 77, english: 65, math: 58 },
    { rollNo: 4349, name: "Zain", urdu: 77, english: 65, math: 58 },
]



function calcPer(percentage) {
    if (percentage > 100) {
        return ("Invalid Pecentage Enter")
    } else if (percentage >= 90) {
        return ("A+")
    } else if (percentage >= 80) {
        return ("A")
    } else if (percentage >= 70) {
        return ("B")
    } else if (percentage >= 60) {
        return ("C")
    } else if (percentage >= 50) {
        return ("D")
    } else {
        return ("Unfortunatily! You are Fail!")
    }
}

document.write(`

<table border >
<tr>
    <td>Sr No.</td>
    <td>Roll No.</td>
    <td>Name</td>
    <td>Urdu</td>
    <td>English</td>
    <td>Math</td>
    <td>Sum</td>
    <td>%age</td>
    <td>Grade</td>
</tr>`)

for (var i = 0; i < data.length; i++) {
    document.write(`
    <tr>
        <td>${i+1}</td>
        <td>${data[i].rollNo}</td>
        <td>${data[i].name}</td>
        <td>${data[i].urdu}</td>
        <td>${data[i].english}</td>
        <td>${data[i].math}</td>
        <td>${sum(data[i].urdu, data[i].english, data[i].math)}</td>
        <td>${sum(data[i].urdu, data[i].english, data[i].math) / 300 * 100}</td>
        <td>${calcPer(sum(data[i].urdu, data[i].english, data[i].math) / 300 * 100)}</td>
    </tr>
`)
}

