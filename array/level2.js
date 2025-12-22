// 1.	Merge [10,25] and [30,45] into a single array.
        const arr1=[10,25]
        const arr2=[30,45]
        let merged =arr1.concat(arr2)        
        console.log(merged); // [ 10, 25, 30, 45 ]

// 2.	Extract [2,3] from [1,2,3,4,5].
        const arr3 = [1,2,3,4,5]
        console.log(arr3.slice(1,3)); // [ 2, 3 ]

// 3.	Replace [2,3] with [8,9] in [1,2,3,4,5].
        const arr4 = [1,2,3,4,5]
        arr4.splice(1,2,8,9); 
        console.log(arr4); // [ 1, 8, 9, 4, 5 ]

        const arr5 = [1,2,3,4,5]
        let toSpliced= arr5.toSpliced(1,2,8,9); 
        console.log(arr5); // [ 1, 2, 3, 4, 5 ]
        console.log(toSpliced);  // [ 1, 8, 9, 4, 5 ]

     /* ES2023 added the Array toSpliced() method as a safe way to splice an array without altering
        the original array.
        The difference between the new toSpliced() method and the old splice() method is that the new
        method creates a new array, keeping the original array unchanged, while the old method altered 
        the original array. */
        
// 4.	Reverse [1,2,3,4] .
        const arr6 = [1,2,3,4]
        console.log(arr6.reverse()); // [ 4, 3, 2, 1 ]  overwrites the original array
        console.log(arr6); // [ 4, 3, 2, 1 ] 

// 5.	Sort [3,1,4,2] in ascending order.
        const arr7= [3,1,4,2]
        console.log(arr7.sort((a,b)=>a-b)); // [ 1, 2, 3, 4 ]  overwrites the original array
        console.log(arr7); // [ 1, 2, 3, 4 ]

// 6.	Join [‘MERN’, ‘Stack’] into a string separated by space.
        const arr8 = ["MERN", "Stack"]
        console.log(arr8.join(" ")); // MERN Stack

// 7.	Check if [1,2,3] includes 4.
        const arr9= [1,2,3]
        console.log(arr9.includes(4)); // false

// 8.	Remove duplicates from [1,2,2,3,3,3,4].
        const arr10= [1,2,2,3,3,3,4]
        let uniqueVal= [...new Set(arr10)];
        console.log(uniqueVal); // [ 1, 2, 3, 4 ]

// 9.	Flatten [1,[2,3],[4,5]] into [1,2,3,4,5].
        const arr11= [1,[2,3],[4,5]]
        console.log(arr11.flat()); // [ 1, 2, 3, 4, 5 ]

// 10.	Multiply each element of [1,2,3] by 2 using map().
        const arr12 = [1,2,3]
        const multiply = arr12.map(item=>item*2);
        console.log(multiply); // [ 2, 4, 6 ]

// 11.	Filter all numbers greater than 3 from [1,4,2,5,3].
        const arr13 = [1,4,2,5,3]
        const great = arr13.filter(item=>item>3)
        console.log(great); // [ 4, 5 ]

// 12.	Sum all numbers in [1,2,3,4,5] using reduce().
        const arr14 = [1,2,3,4,5]
        const sum = arr14.reduce((sum,item)=> sum+item,0)
        console.log(sum); // 15
