interface Books {
    title: string, isRead: boolean
}

const books: Array<Books> = [
    { title: "Harry Potter y la piedra filosofal", isRead: true },
    { title: "Canción de hielo y fuego", isRead: false },
    { title: "Devastación", isRead: true },
  ];

  function isBookRead(books : Array<Books>, titleToSearch: string) {
    const book = books.find(book => book.title === titleToSearch);
    if (book){
        console.log(book.isRead)
    } else {
        console.log(false)
    }
  }

isBookRead(books, "Devastación"); 
isBookRead(books, "Canción de hielo y fuego"); 
isBookRead(books, "Los Pilares de la Tierra"); 