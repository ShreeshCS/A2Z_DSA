function pattern1(n) {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      process.stdout.write("*"); // Print inline
    }
    process.stdout.write("\n"); // Move to the next line after each row
  }
}

pattern1(5);

function pattern2(n) {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j <= i; j++) {
      process.stdout.write("*");
    }
    process.stdout.write("\n");
  }
}

pattern2(5);

function pattern3(n) {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j <= i; j++) {
      process.stdout.write(`${i + 1}`);
    }
    process.stdout.write("\n");
  }
}

pattern3(5);

function pattern4(n) {
  for (let i = 0; i < n; i++) {
    for (let j = n; j > i; j--) {
      process.stdout.write(`*`);
    }
    process.stdout.write("\n");
  }
}
pattern4(5);

function pattern5(n){
  for (let i = 0; i < n; i++) {
    for (let j = n; j > i; j--) {
      process.stdout.write(`${n-j+1}`);
    }
    process.stdout.write("\n");
  }
}
pattern5(5);

function pattern6(n){
  for(let i =0 ; i<n; i++){
    for(let j=0; j<n-i-1; j++){
      process.stdout.write(' ');
    }
    for(let j=0; j<2*i+1; j++){
      process.stdout.write('*');
    }
    for(let j=0; j<n-i-1; j++){
      process.stdout.write(' ');
    }
    process.stdout.write('\n');
  }
}
pattern6(5)

function pattern7(n){
  for (let i = n-1; i>=0; i--) {
    process.stdout.write(' '.repeat(n-1-i));
    process.stdout.write('*'.repeat(2*i+1));
    process.stdout.write(' '.repeat(n-1-i));
    process.stdout.write('\n');
  }
}
pattern7(5);

function printInvertedPyramid(n) {
  for (let i = 0; i < n; i++) {
    // Generate spaces and stars as strings
    const spaces = ' '.repeat(i);
    const stars = '*'.repeat(2 * (n - i) - 1);

    // Write the combined string to the output
    process.stdout.write(spaces + stars + '\n');
  }
}

printInvertedPyramid(5);

function pattern8(n){
  for (let i = 0; i < n; i++) {
    process.stdout.write('*'.repeat(i+1));
    process.stdout.write('\n');
  }
  for(let i=0; i<n; i++){
    process.stdout.write('*'.repeat(n-i-1))
    process.stdout.write('\n');
  }
}
pattern8(5);
