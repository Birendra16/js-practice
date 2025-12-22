// 1.	Create an array of numbers [1, 2, 3, 4, 5] and print its length.
        const arr1 = [1,2,3,4,5];
        console.log(arr1.length); // 5

// 2.	Access the first element of [10, 20, 30].
        const arr3=[10,20,30]
        console.log(arr3[0]); // 10

// 3.	Access the last element of [5, 10, 15, 20].
        const arr4= [5, 10, 15, 20]
        console.log(arr4[arr4.length-1]); // 20

// 4.	Add a number 6 to the end of [1, 2, 3].
        const arr5 = [1, 2, 3]
         arr5.push(6)  
         console.log(arr5); // [ 1, 2, 3, 6 ]

// 5.	Remove the last element from [1, 2, 3, 4].
        const arr6= [1, 2, 3, 4]
        arr6.pop()
        console.log(arr6); // [ 1, 2, 3 ]
        
// 6.	Add a number 0 to the beginning of [1, 2, 3].
        const arr7 = [1, 2, 3]
        arr7.unshift(0)
        console.log(arr7); // [ 0, 1, 2, 3 ]

// 7.	Remove the first element from [1, 2, 3, 4].
        const arr8= [1, 2, 3, 4]
        arr8.shift();
        console.log(arr8); // [ 2, 3, 4 ]

// 8.	Check if 3 exists in [1, 2, 3, 4].
        const arr9= [1, 2, 3, 4]
        console.log(arr9.includes(3)); // true

// 9.	Find the index of 10 in [5, 10, 15].
        const arr10=[5, 10, 15]
        console.log(arr10.indexOf(10)); // 1

// 10.	Convert [1, 2, 3] to a string.
        const arr11=[1, 2, 3]
        console.log(arr11.toString()); // 1,2,3
