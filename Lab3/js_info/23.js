let n = prompt("Enter a number", '')

nextPrime:
for (let i = 2; i <= (n ** 1/2); i++) { 

  for (let j = 2; j < i; j++) { 
    if (i % j == 0) continue nextPrime;
  }
  alert(i);
}