const reverseFactorial = (num) => {
    let divider = 1;

    while (num >1) {

        num/= divider;

        if (num % 1 !== 0) break;
        divider++;
        if (num / divider == 1) {
            return divider + "!";
        }
    }
    return "NONE"
}
console.log(reverseFactorial(150));

module.exports = reverseFactorial;