// - A teacher asks the class to open their books to a page number. A student can either start turning pages from the front of the book or from the back of the book. They always turn pages one at a time. When they open the book, page 1 is always on the right side.
// - When they flip page 1, they see pages 2 and 3. Each page except the last page will always be printed on both sides. The last page may only be printed on the front, given the length of the book. If the book is n pages long, and a student wants to turn to page p, what is the minimum number of pages to turn? They can start at the beginning or the end of the book.
// - Given n and p, find and print the minimum number of pages that must be turned in order to arrive at page p.
// input n = 5, p = 3
// output 1

let no = 5;
let page = 3;

function pageCount(n, p) {
  let numberOfPage = 0;
  // odd pages
  if (p === 1 || p === n ) {
    return numberOfPage;
  }
  // even pages
  if (n % 2 === 0 && p === n - 1) {
    return 1;
  };
  for (let i = 1; i <= n/2; i++) {
    if (i === p || n-i === p) {
      numberOfPage = Math.floor(Math.min(i, n-1) / 2);
      break;
    };
  };
  return numberOfPage;
};

console.log(pageCount(no, page));