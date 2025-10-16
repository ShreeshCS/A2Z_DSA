function pattern1(n) {
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            process.stdout.write('*'); // Print inline
        }
        process.stdout.write('\n'); // Move to the next line after each row
    }
}

pattern1(5);