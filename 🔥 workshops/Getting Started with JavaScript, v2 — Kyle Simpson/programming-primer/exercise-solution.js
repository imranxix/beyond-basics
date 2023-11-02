// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes

let favoriteBooks = [];

// TODO: define addFavoriteBook(..) function
let addFavoriteBooks = function(bookName){
  if (!bookName.includes('Great')){
    favoriteBooks.push(bookName);
  }
}

// TODO: define printFavoriteBooks() function
let printFavoriteBooks = function(){
  console.log(`Favorite Books: ${favoriteBooks.length}`);
  for(let book of favoriteBooks){
    console.log(book);
  }
}

addFavoriteBooks("A song of Ice and Fire");
addFavoriteBooks("The Great Gatsby");
addFavoriteBooks("Crime & punishment");
addFavoriteBooks("Great Expectations");
addFavoriteBooks("You don't know js yet");

// TODO: print out favorite books
printFavoriteBooks();