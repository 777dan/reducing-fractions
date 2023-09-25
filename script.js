let numerator = +prompt("Input a numerator");
let denominator = +prompt("Input a denominator");
let n = numerator;
let d = denominator;
let int = 0;
if (denominator === 0) {
    int = "error";
    document.getElementById("fraction").style.visibility = "hidden";
}
else if (numerator % denominator === 0) {
    int = numerator / denominator;
    document.getElementById("fraction").style.visibility = "hidden";
}
else if (numerator === 0) {
    int = 0;
    document.getElementById("fraction").style.visibility = "hidden";
} else {
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
    } else {
        document.getElementById("int").style.visibility = "hidden";
    }
}
document.getElementById("numerator").innerHTML = numerator;
document.getElementById("denominator").innerHTML = denominator;
document.getElementById("int").innerHTML = int;