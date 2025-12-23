// 1.	Find max number in [10, 5, 20, 15].
        const arr1= [10, 5, 20, 15]
        let max=Math.max(...arr1)
        console.log(max); // 20

// 2.	Find min number in [10, 5, 20, 15].
        const arr2= [10, 5, 20, 15]
        let min = Math.min(...arr2)
        console.log(min); // 5

// 3.	Check if all numbers in [2,4,6,8] are even.
        const arr3= [2,4,6,8]
        let allEven = arr3.every(num=>num%2===0)
        console.log(allEven ? "All number are even" : "All number are not even");

// 4.	Check if any number in [1,3,5,8] is even.
        const arr4 = [1,3,5,8]
        let anyEven = arr4.some(num=>num %2===0)
        console.log(anyEven ? "Any number is even" : "Not any number Even");
        
// 5.	Convert ["1","2","3"] to numbers using map().
        const arr5= ["1","2","3"]
        // let number = arr5.map(item=>Number(item))
        let number = arr5.map(Number)
        console.log(number); // [ 1, 2, 3 ]

// 6.	Find the first number greater than 10 in [5,12,8,20].
        const arr6= [5,12,8,20]
        let firstGreaterNum = arr6.find(num=>num>10)
        console.log(firstGreaterNum); // 12

// 7.	Remove all falsy values from [0,1,false,2,"",3,null].
        const arr7 = [0,1,false,2,"",3,null]
        let remAllFalsy=arr7.filter(Boolean)
        console.log(remAllFalsy); // [ 1, 2, 3 ]
       
// 8.	Sort ["banana", "apple", "cherry"] alphabetically.
        const arr8= ["banana", "apple", "cherry"]
        console.log(arr8.sort()); // [ 'apple', 'banana', 'cherry' ]

// 9.	Count how many times 2 occurs in [1,2,3,2,2,4].
        let arr9 = [1,2,3,2,2,4]
        let count= arr9.filter(item=>item===2).length;
        console.log(count); // 3

// 10.	Merge [1,2] and [2,3] and remove duplicates.
        const arr10= [1,2]
        const arr11= [2,3]
        let merged = arr10.concat(arr11)
        console.log([... new Set(merged)]); // [ 1, 2, 3 ]

// 11.	Get the last 3 elements of [1,2,3,4,5,6].
        const arr12= [1,2,3,4,5,6]
       let threeEl= arr12.slice(arr12.length-3);
       console.log(threeEl); // [ 4, 5, 6 ]

// 12.	Reverse the words in ["Hello","World"] to ["World","Hello"].
        const arr13= ["Hello","World"]
        console.log(arr13.reverse()); // [ 'World', 'Hello' ]
