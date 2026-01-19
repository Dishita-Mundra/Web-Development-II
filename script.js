// let fruits=["apple","banana"];
// let newLength=fruits.push("cherry");
// console.log(fruits); // ["apple", "banana", "cherry"]
// console.log(newLength); // 3

// let remove=fruits.pop();
// console.log(fruits); // ["apple", "banana"]
// console.log(remove); // "cherry"

// let removed=fruits.shift();
// console.log(removed);
// console.log(fruits); // ["banana", "cherry"]

// let newlength=fruits.unshift("apple");
// console.log(newlength); // 3
// console.log(fruits); // ["apple", "banana", "cherry"]

//Q1.reverse the array using push and pop method.
// let arr=[1,2,3,4,5];
// let reversedArr=[];
// while(arr.length>0){
//     let removedElement=arr.pop();
//     reversedArr.push(removedElement);
// }
// console.log(reversedArr);

//Q2.remove all negative numbers from an array 
// let numbers=[-1,2,-3,4,-5,6,-7,8,9];
// let positiveNumbers=[];
// while(numbers.length>0){         
//     let num=numbers.pop();
//     if(num>=0){
//         positiveNumbers.push(num);
//     }
// }
// console.log(positiveNumbers);

//Q3. check if array is palindrome or not. 
// let arr=[1,2,3,2,1];
// let isPalindrome=true;
// let len=arr.length;
// for(let i=0;i<len/2;i++){
//     if(arr[i]!==arr[len-1-i]){
//         isPalindrome=false;
//         break;
//     }
// }
// console.log(isPalindrome);