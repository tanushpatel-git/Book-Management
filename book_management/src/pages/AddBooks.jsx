import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";

export default function AddBooks() {
  let bookData = JSON.parse(localStorage.getItem("bookData")) || [];
  let loginUserdata = JSON.parse(localStorage.getItem("loginUserData")) || [];
  const [error, setError] = useState({});
  const [form, setForm] = useState({
    BookName: "",
    BookUrl: "",
    BookPrice: "",
    BookAuthorName: "",
    BookCategory: "",
    BookDescription: "",
  });

  const formValidation = () => {
    let { BookName, BookPrice } = form;
    let newError = {};
    let isValidationOfName = /^[A-Za-z0-9 ]+$/;
    let isValidationOfPrice = /^[0-9]+(\.[0-9]{1,2})?$/;

    if (!isValidationOfName.test(BookName)) {
      newError.BookName = "Book Name is not right";
    }
    if (!isValidationOfPrice.test(BookPrice)) {
      newError.BookDescription = "This is Not a way of rigth a Price of Book";
    }

    return newError;
  };

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
        toast.success("Your Book is successfully added");
        setForm({
          BookName: "",
          BookUrl: "",
          BookPrice: "",
          BookAuthorName: "",
          BookCategory: "",
          BookDescription: "",
        });
      } else {
        error.BookName && toast.warning(error.BookName);
        error.BookPrice && toast.warning(error.BookPrice);
      }
    }
  };

  return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100 px-4">
        <ToastContainer />

        <form
            onSubmit={handleSubmit}
            className="w-full max-w-lg bg-white/80 backdrop-blur-xl
        shadow-2xl rounded-3xl p-8 space-y-5 border border-white/40"
        >
          <h2 className="text-4xl font-extrabold text-center bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Add Book
          </h2>

          {[
            { label: "Book Name", name: "BookName", type: "text", placeholder: "Enter book name" },
            { label: "Book Image URL", name: "BookUrl", type: "url", placeholder: "Enter image URL" },
            { label: "Book Price", name: "BookPrice", type: "text", placeholder: "Enter book price" },
            { label: "Book Author", name: "BookAuthorName", type: "text", placeholder: "Enter author name" },
            { label: "Book Category", name: "BookCategory", type: "text", placeholder: "Enter category" },
          ].map((field, i) => (
              <div key={i}>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  {field.label}
                </label>
                <input
                    type={field.type}
                    name={field.name}
                    required
                    value={form[field.name]}
                    onChange={handleChange}
                    placeholder={field.placeholder}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300
              focus:outline-none focus:ring-2 focus:ring-blue-500
              focus:border-transparent transition-all"
                />
              </div>
          ))}

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Book Description
            </label>
            <textarea
                name="BookDescription"
                required
                value={form.BookDescription}
                onChange={handleChange}
                placeholder="Enter book description"
                rows={4}
                className="w-full px-4 py-3 rounded-xl border border-gray-300
            focus:outline-none focus:ring-2 focus:ring-blue-500
            focus:border-transparent resize-none transition-all"
            />
          </div>

          <button
              className="w-full py-3 rounded-full text-white font-bold text-lg
          bg-gradient-to-r from-blue-600 to-purple-600
          hover:from-blue-700 hover:to-purple-700
          transition-all duration-300 shadow-lg hover:shadow-xl
          active:scale-95"
          >
            Add Book
          </button>
        </form>
      </div>
  );
}