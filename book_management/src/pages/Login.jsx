import { useState } from "react";
import { Link,useNavigate } from "react-router-dom";
import { toast, ToastContainer } from 'react-toastify'

export default function Login() {
  let userData = JSON.parse(localStorage.getItem("userData")) || [];
  let navigate = useNavigate();
  const [error, setError] = useState({});
  const [form, setForm] = useState({
    userName: "",
    password: "",
  });

  const formValidation = () => {
    let newError = {};
    let { userName, password } = form;
    if (userName.trim().length < 2) {
      newError.userName = "User Name Must Be Atleast 2 Character Long";
    }
    const isValidName = /^[a-zA-Z]+$/
    const isValidePassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]{8,}$/
    if (!isValidName.test(userName)) {
      newError.userName = "Invalid User Name"
    }
    if (!isValidePassword.test(password)) {
      newError.password = "Invalid Pasword"
    }

    return newError;
  }

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let result = formValidation();
    setError(result);
    if (Object.keys(result).length === 0) {
      if (userData.length === 0) {
        toast.warn("U have to sign up first");
      } else {
        userData.forEach(element => {
          if (element.name === form.userName) {
            if (element.password === form.password) {
              localStorage.setItem("loginUserData", JSON.stringify(form))
              toast.success("Login sucess Fully");
              navigate("/")
            } else {
              toast.warning("Incorrect password");
              setForm({ ...form, password: "" });
            }
          } else {
            toast.warning("Enter username is wrong");
            setForm({ ...form, userName: "" });
          }
        });
      }
    } else {
      error.userName && toast.warning(error.userName);
      error.password && toast.warning(error.password);
    }
  };

  return (
    <div className="h-screen flex items-center justify-center bg-gray-100">
      <ToastContainer />
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-md space-y-4 border border-gray-200"
      >
        <h2 className="text-3xl font-bold text-center mb-4">Login</h2>

        <div>
          <label className="block text-gray-700 mb-1">User Name</label>
          <input
            type="text"
            name="userName"
            value={form.userName}
            onChange={handleChange}
            className="w-full p-3 rounded-xl border focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your email"
          />

        </div>

        <div>
          <label className="block text-gray-700 mb-1">Password</label>
          <input
            type="password"
            name="password"
            value={form.password}
            onChange={handleChange}
            className="w-full p-3 rounded-xl border focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your phone number"
          />
        </div>

        <button
          className="w-full bg-blue-600 text-white py-3 rounded-xl hover:bg-blue-700 transition shadow-md"
        >
          Login
        </button>
        <div>
          <p>If you don't have an id then u should have to  <Link className=" text-blue-600 text-[1.2vw] uppercase hover:underline font-bold" to="/SignUp">Signup</Link> first</p>
        </div>
      </form>
    </div>
  );
}
