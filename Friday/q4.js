// Question 4: Write a JavaScript program to display the reading status (i.e. display book name, author name and reading status) of the following books
let library = [ 
    {
        author: 'Bill Gates',
        title: 'The Road Ahead',
        readingStatus: true
    },
    {
        author: 'Steve Jobs',
        title: 'Walter Isaacson',
        readingStatus: true
    },
    {
        author: 'Suzanne Collins',
        title:  'Mockingjay: The Final Book of The Hunger Games', 
        readingStatus: false
    }
];

library.forEach((book) => {
    console.log(`The book ${book.title} by ${book.author} is ${book.readingStatus ? 'read' : 'not read'}`);
})