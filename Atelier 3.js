
// Ex 1:

const numbers1 = [1, 7, 10, 9, 8, 2];
const evenNumbers = numbers1.filter(n => n % 2 === 0);
console.log([...evenNumbers].sort((a, b) => a - b));

// Ex 2:

const numbers2 = [1, 3, 4];

const factorial = (n) => {
    if (n === 0 || n === 1) {
        return 1;
    }
    return n * factorial(n - 1);
};

const factorialOfNumbers = numbers2.map(factorial);

console.log(factorialOfNumbers);



// Ex 3:

const text = "lorem ipsum dolor sit amet, consectetur adip proident, sed do eiusmod tempor incid";

const newText = text.toUpperCase().split('\n').filter(line => line.includes('I'));
newText.forEach(line => console.log(line));


// Ex 4: 
const numbers = [1, 7, 10, 9, 8];

const maxNumber = numbers.reduce((max, current) => {
    return max > current ? max : current;
});

console.log(maxNumber);


// Ex 5: 
const products = [
    { name: "Shirt", price: 20 },
    { name: "Shoes", price: 50 },
    { name: "Hat", price: 15 }
];
const totalPriceTTC = products.reduce((total, product) => total + product.price * 1.25, 0);
console.log(totalPriceTTC);
