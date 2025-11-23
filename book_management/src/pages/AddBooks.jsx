import { useState } from "react";
import { toast, ToastContainer } from 'react-toastify'

export default function AddBooks() {
  let bookData = JSON.parse(localStorage.getItem("bookData")) || [];
  let loginUserdata = JSON.parse(localStorage.getItem("loginUserData")) || [] ;
  const [error, setError] = useState({});
  const [form, setForm] = useState({
    BookName: "",
    BookUrl: "",
    BookPrice: "",
    BookAuthorName: "",
    BookCategory: "",
    BookDescription: ""
  });


  const formValidation = () => {
    let { BookName, BookPrice } = form;
    let newError = {};
    let isValidationOfName = /^[A-Za-z0-9 ]+$/;
    let isValidationOfPrice = /^[0-9]+(\.[0-9]{1,2})?$/;

    if (!isValidationOfName.test(BookName)) {
      newError.BookName = "Book Name is not right"
    }
    if (!isValidationOfPrice.test(BookPrice)) {
      newError.BookDescription = "This is Not a way of rigth a Price of Book"
    }

    return newError;
  }
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (loginUserdata.length === 0) {
      toast.warn("You have to make account first");
    } else {
      let Nerror = formValidation();
      setError(Nerror);

      if (Object.keys(Nerror).length === 0) {
        bookData.push(form);
        localStorage.setItem("bookData", JSON.stringify(bookData));
        toast.success("Your Book is successfully added")
        setForm({
          BookName: "",
          BookUrl: "",
          BookPrice: "",
          BookAuthorName: "",
          BookCategory: "",
          BookDescription: ""
        })
      } else {
        error.BookName && toast.warning(error.BookName)
        error.BookPrice && toast.warning(error.BookPrice)
      }
    }
  };

  return (
    <div className="h-screen flex items-center justify-center bg-gray-100">
      <ToastContainer />
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-md space-y-4 border border-gray-200"
      >
        <h2 className="text-3xl font-bold text-center mb-4">Add Books</h2>

        <div>
          <label className="block text-gray-700 mb-1">Book Name</label>
          <input
            type="text"
            name="BookName"
            required
            value={form.BookName}
            onChange={handleChange}
            className="w-full p-3 rounded-xl border focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your Book name"
          />

        </div>

        <div>
          <label className="block text-gray-700 mb-1">Book Image (in url)</label>
          <input
            type="url"
            name="BookUrl"
            required
            value={form.BookUrl}
            onChange={handleChange}
            className="w-full p-3 rounded-xl border focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your Book Url"
          />
        </div>

        <div>
          <label className="block text-gray-700 mb-1">Book Price</label>
          <input
            type="text"
            name="BookPrice"
            required
            value={form.BookPrice}
            onChange={handleChange}
            className="w-full p-3 rounded-xl border focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your Book Price"
          />
        </div>

        <div>
          <label className="block text-gray-700 mb-1">Book Author</label>
          <input
            type="text"
            name="BookAuthorName"
            required
            value={form.BookAuthorName}
            onChange={handleChange}
            className="w-full p-3 rounded-xl border focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your Book Author name"
          />
        </div>

        <div>
          <label className="block text-gray-700 mb-1">Book Category</label>
          <input
            type="text"
            name="BookCategory"
            required
            value={form.BookCategory}
            onChange={handleChange}
            className="w-full p-3 rounded-xl border focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter Category of book"
          />
        </div>

        <div>
          <label className="block text-gray-700 mb-1">Book Description</label>
          <textarea
            name="BookDescription"
            required
            value={form.BookDescription}
            onChange={handleChange}
            className="w-full p-3 rounded-xl border focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your Book description"
          />
        </div>

        <button
          className="w-full bg-blue-600 text-white py-3 rounded-xl hover:bg-blue-700 transition shadow-md"
        >
          Add Book
        </button>
      </form>
    </div>
  );
}
