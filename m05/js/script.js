let number = prompt("Enter a number from 0 to 10:");
    

number = parseInt(number);
if (isNaN(number) || number < 0 || number > 10) {
    number = 0;
}


let table = "";
for (let i = 1; i <= 10; i++) {
    table += `${number} x ${i} = ${number * i}\n`;
}


document.getElementById("multiplication-table").textContent = table;
