import CardComponent from '../component/CardComponent'
const Home = () => {
  let bookData = JSON.parse(localStorage.getItem("bookData")) || [];
  return (
    <div className=" mt-9 grid grid-cols-3 justify-center items-center">
      {
        bookData.map((ele, key) =>
          <CardComponent
            key={key}
            BookUrl={ele.BookUrl}
            BookName={ele.BookName}
            BookAuthorName={ele.BookAuthorName}
            BookPrice={ele.BookPrice}
            BookDescription={ele.BookDescription}
            BookCategory={ele.BookCategory}
          />
        )
      }
    </div>
  )
}

export default Home
