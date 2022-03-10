export {};

const library = [
  {
    title: "Bill Gates",
    author: "The Road Ahead",
    isRead: true
  },
  {
    title: "Steve Jobs",
    author: "Walter Isaacson",
    isRead: true
  },
  {
    title: "Mockingjay: The Final Book of The Hunger Games",
    author: "Suzanne Collins",
    isRead: false
  }
];

const showStatus = (arr : {
  title: string,
  author: string,
  isRead: boolean
}[]): void => {
  arr.forEach(book => {
    let message = "";
    if (book.isRead) {
      message = `Already read '${book.title}' by ${book.author}.`;
    } else {
      message = `You still need to read '${book.title}' by ${book.author}.`;
    }
    console.log(message);
  });
};

showStatus(library);

/*
  Expected output:

  Already read 'Bill Gates' by The Road Ahead.
  Already read 'Steve Jobs' by Walter Isaacson.
  You still need to read 'Mockingjay: The Final Book of The Hunger Games' by Suzanne Collins.

*/