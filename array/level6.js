// 1. Find the most frequent number in [1,2,2,3,3,3,4].
        const arr1= [4,2,2,3,3,3,4].sort()
        let count=1
        let maxCount  =1
        let mostFrequent = arr1[0]

        for(let i=1; i<arr1.length; i++)
        {
        if(arr1[i]===arr1[i-1])
        {
            count ++;
        }
        else{
            count=1
        }

        if(count>maxCount)
        {
            maxCount=count
            mostFrequent = arr1[i]
        }
        }
        console.log(mostFrequent); // 3

// 2.	Check if [10,20,30] and [30,20,10] contain the same elements.
        const arr2 =[10,20,30]
        const arr3 = [30,20,10]
        
        const result = arr2.length===arr3.length &&
        arr2.sort().every((val,index)=>val===arr3.sort()[index])
        console.log(result);  // true

// 3.	Create an array of numbers from 1 to 10 using a loop.
        const arr4=[]
        for(let i=1; i<=10;i++)
        {
          arr4.push(i)
        }
        console.log(arr4); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// 4.	Remove all numbers less than 5 from [1,3,5,7,9] using filter().
        const arr5= [1,3,5,7,9]
        let output = arr5.filter(item=>item>=5)
        console.log(output); // [ 5, 7, 9 ]

// 5.	Group strings by first letter: ["Apple", "Avocado", "Banana"] → {A:["Apple","Avocado"], B:["Banana"]}.
        const fruits = ["Apple", "Avocado", "Banana"]
        const grouped = fruits.reduce((acc,word)=>{
            const firstLetter = word[0]

            if(!acc[firstLetter])
            {
                acc[firstLetter]= []
            }

            acc[firstLetter].push(word)

            return acc
        },{})

        console.log(grouped); // { A: [ 'Apple', 'Avocado' ], B: [ 'Banana' ] }