let numerator = +prompt("Input a numerator");
let denominator = +prompt("Input a denominator");
let n = numerator;
let d = denominator;
let int = 0;
if (denominator === 0) {
    denominator = "error";
    numerator = "error";
    int = "error";
}
if (numerator === 0) denominator = 0;
else {
    while (n !== d) {
        if (!isNaN(n) && !isNaN(d)) {
            if (n > d) {
                n -= d;
            }
            if (n < d) {
                d -= n;
            }
            if (n === d) {
                while (numerator % n === 0 && denominator % n === 0) {
                    numerator /= n;
                    denominator /= n;
                }
            }
        }
    }
    if (numerator > denominator) {
        int = ~~(numerator / denominator)
        numerator = numerator % denominator;
    }
}
document.getElementById("numerator").innerHTML = numerator;
document.getElementById("denominator").innerHTML = denominator;
document.getElementById("int").innerHTML = int;