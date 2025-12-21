// 1.	Check if 5 > 3 && 10 > 5.
        console.log(5>3 && 10>5); // true

// 2.	Check if 5 > 3 || 2 > 10.
        console.log(5>3 || 2>10); // true

// 3.	Check if !(5 > 10).
        console.log(!(5>10)); // true

// 4.	Check if an empty array [] is truthy or falsy.
        console.log(Boolean([])); // true

// 5.	Check if an empty object {} is truthy or falsy.
        console.log(Boolean({})); // true

// 6.	Check if null is truthy or falsy.
        console.log(Boolean(null)); // false

// 7.	Check if undefined is truthy or falsy.
        console.log(Boolean(undefined)); // false

// 8.	Convert !!"Hello" to Boolean.
        console.log(!!"Hello"); // true

// 9.	Convert !!0 to Boolean.
        console.log(!!0); // false

// 10.	Compare NaN == NaN and NaN === NaN.
        console.log(NaN == NaN); // false
        console.log(NaN===NaN); // false
