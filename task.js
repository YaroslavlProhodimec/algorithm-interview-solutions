// // найти пересечение массивов
//
// let inputOne = [1,7,8,9,11,33]
// //
// let inputTwo = [7,11,33]
//
//
// const intersection = (arrOne,arrTwo) => {
//
//     let hashMap = {}
//     let result = []
//
//     for (let i = 0; i < arrOne.length; i++) {
//         let char = arrOne[i]
//         hashMap[char] =  hashMap[char] ?  hashMap[char] + 1 : 1
//     }
//
//     for (let i = 0; i < arrTwo.length; i++) {
//          let char = arrTwo[i]
//          let count = hashMap[char]
//
//           if(count && count > 0){
//               result.push(char)
//               hashMap[char] - 1
//           }
//     }
//     return result
// }
// console.log(intersection(inputOne,inputTwo))
//
//

//Shuffle

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
//
//
// const shuffle = (input) => {
//
//     for (let i = 0; i < input.length; i++) {
//         let random = Math.floor(Math.random() * (i + 1))
//         let tmp =  input[i]
//         input[i] = input[random]
//         input[random] = tmp
//     }
//
// return input
// }
//
// for (let i = 0; i < 10; i++) {
//
//     console.log(shuffle(arr).join(''))
// }

// Buble sort

// let arr = [111, 8, 33, 11111, 3, 11, 5, 1, 1, 188, 9, 14]
//
// const bubleSorting = (input) => {
//
//     for (let i = 0; i < arr.length; i++) {
//
//         for (let j = 0; j < arr.length - 1 - i; j++) {
//
//             let tmp = arr[j]
//             if (arr[j] > arr[j + 1]) {
//                 arr[j] = arr[j + 1]
//                 arr[j + 1] = tmp
//             }
//
//         }
//     }
//     return arr
// }
//
//
// console.log(bubleSorting(arr))


// let inputOne = [1, 7, 8, 9, 11, 33]
//
// let inputTwo = [7, 11, 33, 5]
//
//
// const unique = (inputOne, inputTwo) => {
//     let result = []
//     for (let i = 0; i < inputOne.length; i++) {
//
//         let found = false
//
//         for (let j = 0; j < inputTwo.length; j++) {
//
//             if (inputOne[i] === inputTwo[j]) {
//                 found = true
//                 break;
//             }
//
//         }
//         if (!found) {
//             result.push(inputOne[i])
//         }
//     }
//
//     for (let i = 0; i < inputTwo.length; i++) {
//
//         let found = false
//
//         for (let j = 0; j < inputOne.length; j++) {
//
//             if (inputTwo[i] === inputOne[j]) {
//                 found = true
//                 break;
//             }
//
//         }
//         if (!found) {
//             result.push(inputTwo[i])
//         }
//     }
//     return result
// }
//
//
// console.log(unique(inputOne, inputTwo))


// let word = 'aabbfcc'
//
// const uniqueChar = (input) => {
//
//     let hashMap = {}
//
//     for (let i = 0; i < input.length; i++) {
//         let char = input[i]
//
//         hashMap[char] = hashMap[char] ? hashMap[char] + 1 : 1
//     }
//     for (let i = 0; i < input.length; i++) {
//         if( hashMap[input[i]] === 1 ) {
//             return i
//         }
//     }
//     return  false
// }
//
// console.log(uniqueChar(word))
//


