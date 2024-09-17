// an object of objects 
const products = [
    {
        id: "001",
        name: "Wireless Mouse",
        description: "A high-precision wireless mouse with adjustable DPI settings.",
        price: 29.99,
        category: "Electronics",
        stock: 150
    },
    {
        id: "002",
        name: "Bluetooth Headphones",
        description: "Over-ear Bluetooth headphones with noise cancellation.",
        price: 89.99,
        category: "Electronics",
        stock: 75
    },
    {
        id: "003",
        name: "Ergonomic Office Chair",
        description: "An ergonomic office chair with adjustable height and lumbar support.",
        price: 199.99,
        category: "Furniture",
        stock: 20
    },
    {
        id: "004",
        name: "Yoga Mat",
        description: "A non-slip yoga mat with extra cushioning for comfort.",
        price: 24.99,
        category: "Fitness",
        stock: 100
    },
    {
        id: "005",
        name: "Stainless Steel Water Bottle",
        description: "A durable stainless steel water bottle with a leak-proof cap.",
        price: 15.99,
        category: "Home & Kitchen",
        stock: 200
    }
];

// Convert the products array to a JSON string
const productsJSON = JSON.stringify(products);
console.log(productsJSON);

//Export the JSON for this file to act like a mock backend
export default productsJSON;