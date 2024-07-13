const inputReg = /^-?\d+$/;
const convertBtn = document.getElementById("convert-btn");
const output = document.getElementById("output");
const romanMappings = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1
};

function inputTest() {
    const input = document.getElementById("number").value.trim(); // Trim input to remove whitespace

    if (!inputReg.test(input)) {
        output.textContent = "Please enter a valid number.";
        output.setAttribute("id", "output-invalid");
        output.style.display = "flex";
        return false;
    }

    output.textContent = ""; // Clear any previous error message
    output.setAttribute("id", "output"); // Set id to "output" for valid input
    return true;
}

function maxAndMin(input) {
    if (Number(input) < 1) {
        output.textContent = "Please enter a number greater than or equal to 1";
        output.setAttribute("id", "output-invalid");
        output.style.display = "flex";
        return false;
    } else if (Number(input) >= 4000) {
        output.textContent = "Please enter a number less than 4000";
        output.setAttribute("id", "output-invalid");
        output.style.display = "flex";
        return false;
    }

    output.textContent = ""; // Clear any previous error message
    output.setAttribute("id", "output"); // Set id to "output" for valid input
    return true;
}

function romanToNumeralConverter(num) {
    let result = "";
    for (let key in romanMappings) {
        const value = romanMappings[key];
        while (num >= value) {
            num -= value;
            result += key;
        }
    }
    output.textContent = result;
    output.style.display = "flex";
}

convertBtn.addEventListener("click", () => {
    const input = document.getElementById("number").value;

    if (inputTest() && maxAndMin(input)) {
        romanToNumeralConverter(Number(input));
    }
});
