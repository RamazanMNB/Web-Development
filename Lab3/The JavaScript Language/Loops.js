// let i = 3;
//
// while (i) {
//     alert( i-- );
// } // 1

//2
// let i=0;
// while (i < 3) {
//     alert( `number ${i}!` );
//     i++;
// }

//3
while (true) {
    let number = prompt("Enter a number");
    if (number > 100) {
        break;
    } else if (number == null){
        break;
    }   else if (number == 'Cancel'){
        break;
    }
}

