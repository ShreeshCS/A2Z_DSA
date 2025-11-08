function prints(val){
  process.stdout.write(val);
}

(function pattern1(n) {
  console.log('pattern1');
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      prints("*"); // Print inline
    }
    prints("\n"); // Move to the next line after each row
  }
})(5);
console.log('------------------------------');

(function pattern2(n) {
  console.log('pattern2');
  for (let i = 0; i < n; i++) {
    for (let j = 0; j <= i; j++) {
      prints("*");
    }
    prints("\n");
  }
})(5);
console.log('------------------------------');

(function pattern3(n) {
  console.log('pattern3');
  for (let i = 0; i < n; i++) {
    for (let j = 0; j <= i; j++) {
      prints(`${i + 1}`);
    }
    prints("\n");
  }
})(5);
console.log('------------------------------');

(function pattern4(n) {
  console.log('pattern4');
  for (let i = 0; i < n; i++) {
    for (let j = n; j > i; j--) {
      prints(`*`);
    }
    prints("\n");
  }
})(5);
console.log('------------------------------');

(function pattern5(n){
  console.log('pattern5');
  for (let i = 0; i < n; i++) {
    for (let j = n; j > i; j--) {
      prints(`${n-j+1}`);
    }
    prints("\n");
  }
})(5);
console.log('------------------------------');

(function pattern6(n){
  console.log('pattern6');
  for(let i =0 ; i<n; i++){
    for(let j=0; j<n-i-1; j++){
      prints(' ');
    }
    for(let j=0; j<2*i+1; j++){
      prints('*');
    }
    for(let j=0; j<n-i-1; j++){
      prints(' ');
    }
    prints('\n');
  }
})(5);
console.log('------------------------------');

(function pattern7(n){
  console.log('pattern7');
  for (let i = 0; i<n; i++) {
    prints(' '.repeat(i));
    prints('*'.repeat(2*n-2*i-1));
    prints('\n');
  }
})(5);
console.log('------------------------------');

(function pattern8(n) {
  console.log('pattern8');
  for (let i = 0; i < n; i++) {
    // Generate spaces and stars as strings
    const spaces = ' '.repeat(i);
    const stars = '*'.repeat(2 * (n - i) - 1);

    // Write the combined string to the output
    prints(spaces + stars + '\n');
  }
})(5);
console.log('------------------------------');

(function pattern9(n){
  console.log('pattern9');
  for (let i = 0; i < n; i++) {
    prints('*'.repeat(i+1));
    prints('\n');
  }
  for(let i=0; i<n; i++){
    prints('*'.repeat(n-i-1))
    prints('\n');
  }
})(5);
console.log('------------------------------');

(function pattern10(n){
  console.log('pattern10');
  // Implemented as a simple right-angle triangle so the file runs
  for(let i =0 ;i<n ;i++){
    for (let j = 0; j <= i; j++) {
      prints('*');
    }
    prints('\n');
  }
})(5);
console.log('------------------------------');
