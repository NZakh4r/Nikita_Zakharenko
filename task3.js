function sumDigitsRecursively(n) {
    let sum = 0;
    while (n) {
        digit = n % 10;
        sum += digit;
        n = (n - digit) / 10;
    }
    if (sum < 10)
        return sum;
    else
        return sumDigitsRecursively(sum);
}
document.write("Task 3: Entered number: 132189, result: ",sumDigitsRecursively(132189))