//10. Write a JavaScript program to sort an array of JavaScript objects.
let library = [ 
    {
        title:  'The Road Ahead',
        author: 'Bill Gates',
        libraryID: 1254
    },
    {
        title: 'Walter Isaacson',
        author: 'Steve Jobs',
        libraryID: 4264
    },
    {
        title: 'Mockingjay: The Final Book of The Hunger Games',
        author: 'Suzanne Collins',
        libraryID: 3245
    }
];

library.sort((a, b) => {
    if(a.author < b.author ){
        return -1;
    } else if(a.author > b.author){
        return 1;
    }

    return 0;
})

console.log(library)