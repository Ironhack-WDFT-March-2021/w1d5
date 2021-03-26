// https://doesitmutate.xyz/ - to check if the methods mutate the original
// console.log('array methods');

// map - changes every element to sth else
const names = ['stark', 'targaryen', 'lannister'];

const mapped = names.map(function (name) {
    console.log(name)
    return 'house ' + name;
})
console.log(mapped)

console.clear();

// const numbers = [1, 2, 3, 4, 5];

// const doubled = numbers.map(function (x) {
//     x * 2
// })
// map does not mutate the original
// console.log(numbers)
// console.log(doubled)
console.clear();
const students = [
    {
        name: "Tony Parker",
        firstProject: 80,
        secondProject: 75
    },
    {
        name: "Marc Barchini",
        firstProject: 84,
        secondProject: 65
    },
    {
        name: "Claudia Lopez",
        firstProject: 45,
        secondProject: 95
    },
    {
        name: "Carolina Perez",
        firstProject: 85,
        secondProject: 72
    }
];
// map over students
// 1. create an array containing only the students names

const studentsNames = students.map(function (student) {
    // console.log(student.name)
    return student.name;
})
// console.log(studentsNames)
// 2. create another array containing objects in this form
// {name: <name of the student>, projects: <sum of the project scores>}
const projectResults = students.map(function (student) {
    return {
        name: student.name,
        projects: student.firstProject + student.secondProject
    }
})
console.log(projectResults);
// {
//     name: "Tony Parker",
//     projects: 155
// }


console.clear();

// reduce - turn the array into one value

const numbers = [2, 4, 6, 8];

const sum = numbers.reduce(function (acc, val) {
    console.log('acc is: ', acc)
    console.log('val is: ', val)
    return acc + val
}, 0)
console.log(sum)

const members = ['brian', 'mike', 'alan', 'bruce'];
const length = members.reduce(function (acc, val) {
    return acc + val.length
}, 0)
console.log(length)

console.clear();

const people = [
    { name: "Candice", age: 25 },
    { name: "Tammy", age: 30 },
    { name: "Allen", age: 49 },
    { name: "Nettie", age: 21 },
    { name: "Stuart", age: 17 }
];

// use reduce to sum up all the ages in the people array
const ages = people.reduce(function (total, person) {
    return total + person.age
}, 0)

console.log(ages)
console.clear();

const product = {
    name: "AmazonBasics Apple Certified Lightning to USB Cable",
    price: 7.99,
    manufacter: "Amazon",
    reviews:
        [
            {
                user: "Pavel Nedved",
                comments: "It was really usefull, strongly recommended",
                rate: 4
            },
            {
                user: "Alvaro Trezeguet",
                comments: "It lasted 2 days",
                rate: 1
            },
            {
                user: "David Recoba",
                comments: "Awesome",
                rate: 5
            },
            {
                user: "Jose Romero",
                comments: "Good value for money",
                rate: 4
            },
            {
                user: "Antonio Cano",
                comments: "It broked really fast",
                rate: 2
            },
        ]
}
// sum up all the rates for this product
console.log(product.reviews)
const sumRates = product.reviews.reduce(function (acc, val) {
    return acc + val.rate
}, 0)
console.log(sumRates)
console.clear()

// filter - iterates over the array and returns a new array containing some 
// of the elements that match the provided condition

const nums = [1, 2, 3, 4, 5, 6, 7];

const evens = nums.filter(function (number) {
    if (number % 2 === 0) {
        return true
    }
    // return number % 2 === 0
})
console.log(evens)
// also filter can have optional parameters
const largerThanThree = nums.filter(function (number, index, arr) {
    console.log(index)
    console.log(nums)
    if (number > 3) return true
})
console.log(largerThanThree)
console.clear()

// kata: https://www.codewars.com/kata/57ee4a67108d3fd9eb0000e7/train/javascript

// solution
function gooseFilter(birds) {
    var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];

    return birds.filter(function (bird) {
        if (geese.indexOf(bird) === - 1) {
            return true
        }
    })
};


gooseFilter(["Mallard", "Barbary", "Hook Bill", "Blue Swedish", "Crested"])
// Expected: ["Mallard", "Barbary", "Hook Bill", "Blue Swedish", "Crested"]);


const places = [
    {
        title: "Awesome Suite 20' away from la Rambla",
        price: 200,
        type: "Private Room",
        pool: true,
        garage: false
    },
    {
        title: "Private apartment",
        price: 190,
        type: "Entire Place",
        pool: true,
        garage: true
    },
    {
        title: "Apartment with awesome views",
        price: 400,
        type: "Entire Place",
        pool: false,
        garage: false
    },
    {
        title: "Apartment in la Rambla",
        price: 150,
        type: "Private Room",
        pool: false,
        garage: true
    },
    {
        title: "Comfortable place in Barcelona´s center",
        price: 390,
        type: "Entire place",
        pool: true,
        garage: true
    }
];
// filter out the places with a price above 300 ||| and in the result array only
const above300 = places.filter(function (place) {
    if (place.price > 300) {
        return true
    }
})
console.log(above300)
const titles = above300.map(function (place) {
    return place.title
})
console.log(titles)
// show the titles of the places
// in the end we want to have an array only containing the title strings
console.clear();
// reverse - reverses an array

const a = [1, 2, 3, 4, 5];
a.reverse()
console.log(a)

const str = 'hello world';
console.log(str.split('').reverse().join(''))
// to change a string into an array - split()
const arr = str.split('');
arr.reverse();
// to change a array into an string - join()
const reversedStr = arr.join('');
console.log(reversedStr);

const splitWords = str.split(' ');
console.log(splitWords);
const name = 'annamarie';
// you can also have a string that is used to join the array
console.log(name.split('').join('-'))
console.clear();
// nice trick to get the amount of chars in a string
const numberOfChars = name.split('e').length - 1
console.log(numberOfChars)
console.clear();

// sort - sorts an array
const amounts = [22, 23, 1, 68, 112, 99, 0, 64];

const sorted = amounts.sort(function (a, b) {
    // console.log(a, b);
    // if (a < b) {
    //     return 3;
    // }
    // if (b < a) {
    //     return - 5
    // }
    // if (b === a) {
    //     return 0;
    // }
    return a - b
})

console.log(sorted)
console.clear();
const reviews = [
    {
        name: 'hans',
        rate: 9
    },
    {
        name: 'bob',
        rate: 3
    },
    {
        name: 'alice',
        rate: 5
    }
];
// sort the reviews
const sortedReviews = reviews.sort(function (a, b) {
    return b.rate - a.rate
})
console.log(sortedReviews)