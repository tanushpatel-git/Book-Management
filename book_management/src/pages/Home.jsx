import CardComponent from "../component/CardComponent";

const Home = () => {
  let bookData = JSON.parse(localStorage.getItem("bookData")) || [];

  return (
      <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100 px-6 py-12">
        {/* Header */}
        <div className="max-w-7xl mx-auto text-center mb-12">
          <h1 className="text-5xl font-extrabold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Book Collection
          </h1>
          <p className="text-gray-600 mt-3 text-lg">
            Explore, manage, and organize your books in one place
          </p>
        </div>

        {/* Content */}
        {bookData.length === 0 ? (
            <div className="flex flex-col items-center justify-center text-center mt-24">
              <div className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-xl p-10 border border-white/40">
                <h2 className="text-3xl font-bold text-gray-800 mb-2">
                  No Books Found 📚
                </h2>
                <p className="text-gray-600">
                  Start by adding your first book to the collection.
                </p>
              </div>
            </div>
        ) : (
            <div
                className="max-w-7xl mx-auto grid gap-8
          grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
            >
              {bookData.map((ele, key) => (
                  <CardComponent
                      key={key}
                      BookUrl={ele.BookUrl}
                      BookName={ele.BookName}
                      BookAuthorName={ele.BookAuthorName}
                      BookPrice={ele.BookPrice}
                      BookDescription={ele.BookDescription}
                      BookCategory={ele.BookCategory}
                  />
              ))}
            </div>
        )}
      </div>
  );
};

export default Home;