import { useState } from "react";
import {useNavigate} from 'react-router-dom'
import { toast, ToastContainer } from 'react-toastify'

export default function SignUp() {

let navigate = useNavigate();
  let userData = JSON.parse(localStorage.getItem("userData")) || [];

  const [error, setError] = useState({});
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    address: "",
  });

  const formValidation = () => {
    let newError = {};
    let { name, email, password, address, phone } = form;
    if (name.trim().length < 2) {
      newError.name = "User Name Must Be Atleast 2 Character Long";
    }
    const isValidName = /^[a-zA-Z]+$/
    const isValideContactN = /^[6-9]\d{9}$/
    const isValidePassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]{8,}$/
    const isValideAddress = /^[A-Za-z0-9\s,.'\-/#]{5,100}$/
    const isValideEmail = /^(?!.*\.\.)[A-Za-z0-9](?:[A-Za-z0-9._%+-]{0,62}[A-Za-z0-9])?@[A-Za-z0-9](?:[A-Za-z0-9.-]{0,62}[A-Za-z0-9])?\.[A-Za-z]{2,}$/
    if (!isValidName.test(name)) {
      newError.name = "Invalid User Name"
    }
    if (!isValideContactN.test(phone)) {
      newError.phone = "Invalid Phone Number"
    }
    if (!isValideEmail.test(email)) {
      newError.email = "Invalid Email Name"
    }
    if (!isValidePassword.test(password)) {
      newError.password = "Invalid Pasword"
    }
    if (!isValideAddress.test(address)) {
      newError.address = "Invalid Address"
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
      userData.push(form);
      localStorage.setItem("userData", JSON.stringify(userData))
      toast.success("Sign up Successfully")
      setForm({
        name: "",
        phone: "",
        address: "",
        email: "",
        password: ""
      })
      navigate("/Login")
    }else{
      error.phone && toast.warning(error.phone)
      error.name && toast.warning(error.name)
      error.address && toast.warning(error.address)
      error.email && toast.warning(error.email)
      error.password && toast.warning(error.password)
    }
  };

  return (
    <div className="h-screen flex items-center justify-center bg-gray-100">
      <ToastContainer />
      <form
        className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-md space-y-4 border border-gray-200"
        onSubmit={handleSubmit}
      >
        <h2 className="text-3xl font-bold text-center mb-4">Sign Up</h2>

        <div>
          <label className="block text-gray-700 mb-1">User Name</label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            className="w-full p-3 rounded-xl border focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your full name"
          />
        </div>

        <div>
          <label className="block text-gray-700 mb-1">Email</label>
          <input
            type="email"
            name="email"

            value={form.email}
            onChange={handleChange}
            className="w-full p-3 rounded-xl border focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your email"
          />
        </div>

        <div>
          <label className="block text-gray-700 mb-1">Phone Number</label>
          <input
            type="tel"
            name="phone"

            value={form.phone}
            onChange={handleChange}
            className="w-full p-3 rounded-xl border focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your phone number"
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
            placeholder="Enter your password"
          />
        </div>

        <div>
          <label className="block text-gray-700 mb-1">Address</label>
          <textarea
            name="address"

            value={form.address}
            onChange={handleChange}
            className="w-full p-3 rounded-xl border focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your address"
          />
        </div>

        <button
          className="w-full bg-blue-600 text-white py-3 rounded-xl hover:bg-blue-700 transition shadow-md"
        >
          Create Account
        </button>
      </form>
    </div>
  );
}