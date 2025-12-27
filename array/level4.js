// 1.	Flatten [1,[2,[3,[4]]]] into [1,2,3,4].
      const arr1= [1,[2,[3,[4]]]]
      console.log(arr1.flat(3)); // [ 1, 2, 3, 4 ]

// 2.	Group [ {name:"John", age:25}, {name:"Jane", age:30}, {name:"Joe", age:25} ] by age.
     const people = [ 
       {name:"John", age:25}, 
       {name:"Jane", age:30}, 
       {name:"Joe", age:25} 
      ]
      const groupByAge= people.reduce((group,person)=>{
            const age =person.age;
            if(!group[age]){
            group[age] =[];
            }
            group[age].push(person);
            return group;
      },{});
      console.log(groupByAge); 
/* {
   '25': [ { name: 'John', age: 25 }, { name: 'Joe', age: 25 } ],
   '30': [ { name: 'Jane', age: 30 } ]
 } */

// 3.	Remove all duplicates from [1,2,2,3,3,4] without using Set().
      const arr2= [5,8,8,2,2,4]
      const uniqueEl= arr2.filter((item,index)=>{
            return arr2.indexOf(item)===index;
      });
      console.log(uniqueEl); // [ 5, 8, 2, 4 ]

// 4.	Calculate the average of [10,20,30,40].
      const arr3= [10,20,30,40]
      let sum=0;
      arr3.forEach((item)=>{
       sum=sum+item;
      })
      const avg = sum/arr3.length;
      console.log(avg); // 25

// 5.	Find the largest string length in ["MERN","Stack","JS"].
      const arr4 = ["MERN","Stack","JS"]
      let maxLength =0;
      arr4.forEach((item)=>{
            if(item.length>maxLength)
            {
                  maxLength=item.length;
            }
      });
      console.log(maxLength); // 5

