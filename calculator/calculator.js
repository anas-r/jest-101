export function calculator(a, b, operator) {
    try {
        return ((operator === "+") ? a + b :
            (operator === "-") ? a - b :
                (operator === "*") ? a * b :
                    (operator === "/") && a / b);
    } catch (e) {
        console.err(e)
    }
}