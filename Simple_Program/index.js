// const name="Truvisha"
// console.log("hello "+name)

// console.log("program.1 even odd number")
// const n=4
// if(n%2)
// {
//     console.log("odd number")
// }
// else
// {
//     console.log("even number")
// }

// console.log("program.2 find maximum of two number")
// var a=5
// var b=9
// if(a>b)
// {
//     console.log("maximum number is:",a)
// }
// else
// {
//     console.log("maximum number is:",b)
// }

// console.log("program.3 check leap year")
// var year=2020
// if(year/4)
// {
//     console.log(year,"is leap year")
// }
// else
// {
//     console.log(year,"is not leap yaer")
// }

// console.log("program.4 sum of natural number")
// var n=5
// sum=0
// for(i=1;i<=n;i++)
// {
//     sum+=i
// }
// console.log(sum)

// console.log("program.5 factorial of a number")
// var n=4
// fact=1
// for(i=1;i<=n;i++)
// {
//     fact*=i
// }
// console.log(fact)

// console.log("program.6 print multiplication table")
// var n=3
// for(i=1;i<=10;i++)
// {
//     console.log(`${n} X ${i} = ${n*i}`)
// }

// console.log("program.7 reverse number")
// var n=322142
// var rev=n.toString().split('').reverse().join('')
// console.log(rev)

// console.log("program.8 check palindrome number")
// var n=121
// var p=n.toString().split('').reverse().join('')
// if(n==p)
// {
//     console.log(n,"number is palindrome")
// }
// else
// {
//     console.log(n,"number is not palindrome")
// }

// console.log("program.9 check prime number")
// var n=11
// var prime=1
// for(i=2;i<=n/2;i++)
// {
//     if(n%i==0)
//     {
//         prime=0
//         break
//     }
// }
// if(prime)
// {
//     console.log(n,"is prime number")
// }
// else
// {
//     console.log(n,"is not prime number")
// }

// console.log("program.10 count digits in a number")
// function digit(num)
// {
//     return String(num).length
// }
// let n=5023
// console.log(digit(n))

// console.log("program.11 sum of digits")
// function sumdigit(num)
// {
//     const numstr=num.toString()
//     let sum=0
//     for(const char of numstr)
//     {
//         if(!isNaN(char))
//         {
//             sum+=Number(char)
//         }
//     }
//     return sum
// }
// console.log(sumdigit(123))

// console.log("program.12 check armstrong number")
// let n = 153;
// let num = n.toString(); 
// let count = num.length;

// let sum = 0;

// for (let digit of num) {
//     sum += Math.pow(Number(digit), count); 
// }

// if (sum === n) {
//     console.log("Number is Armstrong");
// } else {
//     console.log("Number is Not Armstrong");
// }

// console.log("program.13 Generate Fibonacci Series")
// let num=5
// let a=0
// let b=1
// let c=0
// for(let i=0;i<num;i++)
// {
//     console.log(a)
//     c=a+b
//     a=b
//     b=c
// }

// console.log("program.14 Check Vowel or Consonant")
let char=prompt("enter letter")
// let char="a"
if(char==="a"||char==="e"||char==="i"||char==="o"||char==="u"||
   char==="A"||char==="E"||char==="I"||char==="O"||char==="U")
   {
       console.log("it's a vowel")
   }
   else
   {
    console.log("it's a consonants")
   }

// console.log("program.15 Simple Calculator")
// var a=4
// var b=2
// console.log(`${a} + ${b} = ${a+b}`)
// console.log(`${a} - ${b} = ${a-b}`)
// console.log(`${a} * ${b} = ${a*b}`)
// console.log(`${a} / ${b} = ${a/b}`)

// console.log("program.16 Find GCD (HCF)")
// var a = 20, b = 28, gcd;
// for (i = 1; i <= a && i <= b; i++)
// {
//     if (a % i == 0 && b % i == 0) 
//     {
//         gcd = i;
//     }
// }
// console.log(gcd);  
   
// console.log("program.17 check perfect number")
// var n=28
// var sum=0
// for(i=1;i<n;i++)
// {
//     if(n%i==0)
//     {
//         sum+=i
//     }
// }
// if(sum==n)
// {
//     console.log("number is perfect")
// }
// else
// {
//     console.log("number is not perfect")
// }

// console.log("program.18 print all divisors")
// var n=10
// for(i=1;i<=n;i++)
// {
//     if(n%i==0)
//     {
//         console.log(i)
//     }
// }

// console.log("program.19 number is positive,negative or zero")
// var n=-5
// if(n>0)
// {
//     console.log("number is positive")
// }
// else if(n<0)
// {
//     console.log("number is negative")
// }
// else
// {
//     console.log("number is zero")
// }

// console.log("program.20 find power(Exponentiation)")
// var a=2
// var b=3
// var result=1
// for(i=0;i<b;i++)
// {
//     result*=a
// }
// console.log("power:",result)