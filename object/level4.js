// HIGH LEVEL DIFFICULTY PROBLEM
const user = {
    name: 'kaylin',
    age:50
}

const addressDetails = {
    primary: {
        city: 'los angeles',
        country: 'usa'
    },
    secondary: {
        city: 'Gorkha',
        country: 'Nepal'
    }
}

// Q1. output should ['GORKHA', 'NEPAL']
let output= Object.values(addressDetails.secondary);
let result= output.map((item)=>{
    return item.toUpperCase();
})
console.log(result);


//Q2. output should be 'kaylin lives in los angeles, usa'
        console.log(`${user.name} lives in ${addressDetails.primary.city}`);

//Q3. output should be [[name, 'kaylin'], [age, 50]]
    console.log(Object.entries(user));