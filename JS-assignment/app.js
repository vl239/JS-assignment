// javascript assignment

// problem 1
let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
};

let sum = 0;
for (let key in salaries) {
    sum += salaries[key];
}
console.log(sum);
// 390

// problem 2
// before the call
let menu = {
    width: 200,
    height: 300,
    title: "My menu"
};
multiplyNumeric(menu);
console.log(menu);
// after the call
// menu = {
//     width: 400,
//     height: 600,
//     title: "My menu"
// };

function multiplyNumeric(obj) {
    for (let key in obj) {
        if (typeof obj[key] == 'number') {
            obj[key] *= 2;
        }
    }
}


// problem 3
console.log(checkEmailId("vl239@cornell.edu"));
// true

function checkEmailId(str) {
    return (str.includes('@') && str.includes('.'));
}


// problem 4
console.log(truncate("What I'd like to tell on this topic is:", 20)); // = "What I'd like to te…"
console.log(truncate("Hi everyone!", 20)); // = "Hi everyone!"

function truncate(str, maxlength) {
    return (str.length > maxlength) ?
        str.slice(0, maxlength - 1) + '…' : str;
}


// problem 5
// James, Brennie
// James, Brennie, Robert
// James, Calvin, Robert
// Calvin, Robert
// Rose, Regal, Calvin, Robert

let styles = ["James", "Brennie"];
styles.push("Robert");
styles[Math.floor((styles.length - 1) / 2)] = "Calvin";
styles.shift();
styles.unshift("Rose", "Regal");
console.log(styles);
