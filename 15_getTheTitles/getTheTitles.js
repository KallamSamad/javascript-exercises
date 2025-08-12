const books = [
  {
    title: 'Limitless',
    author: 'Name'
  },
  {
    title: 'The lord of the flies',
    author: 'Name2'
  },
  {
      title: "Catcher in the Rye",
      author: "JD Sellinger"
  },
  {
      title: "Dont",
      author: "do it"
  }
]

const bookList = books.map((a)=>{
    return a.title
})

console.log(bookList)

// Do not edit below this line
module.exports = getTheTitles;
