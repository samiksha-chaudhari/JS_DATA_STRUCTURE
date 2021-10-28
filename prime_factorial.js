let factors = new Array();

let num = 12;

for (let index = 2; index <= num; index++)
 {
  while (num % index == 0) 
  {
    factors.push(index);
    num /= index;
  }
}

for (let val of factors)
 {
  console.log(val);
}