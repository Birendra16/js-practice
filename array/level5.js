// 1.	Find intersection of [1,2,3] and [2,3,4].
        const arr1 = [1,2,3]
        const arr2 = [2,3,4]
        const intersection = arr1.filter(item=>arr2.includes(item));
        console.log(intersection); // [ 2, 3 ]

// 2.	Sort [ {name:"John", age:25}, {name:"Jane", age:20} ] by age ascending.
        let arr3= [ 
            {name:"John", age:25},
             {name:"Jane", age:20}
             ]
        arr3.sort((a,b)=>a.age-b.age)
        console.log(arr3); // [ { name: 'Jane', age: 20 }, { name: 'John', age: 25 } ]

// 3.	Convert [1,2,3] into [{value:1},{value:2},{value:3}].
       const arr4 = [1,2,3]
       const result= arr4.map(item=>({value : item}))
       console.log(result); // [ { value: 1 }, { value: 2 }, { value: 3 } ]

// 4.	Flatten and sum [1,[2,3],[4,[5]]].
        const arr5 = [1,[2,3],[4,[5]]]
        const flatten = arr5.flat(2)
        console.log(flatten); // [ 1, 2, 3, 4, 5 ]

// 5.	Convert array [“user1@example.com”, “user2@test.com”] into array of usernames ["user1","user2"].
        const arr6 = ["user1@example.com", "user2@test.com"]
        const usernames= arr6.map(email=> email.split("@")[0]);
        console.log(usernames); // [ 'user1', 'user2' ]

      