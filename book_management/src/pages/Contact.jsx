import React from "react";

const Contact = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100 flex items-center justify-center px-4">
            <div
                className="w-full max-w-4xl bg-white/80 backdrop-blur-xl
        rounded-3xl shadow-2xl border border-white/40 p-8 grid md:grid-cols-2 gap-8"
            >
                {/* Left Section */}
                <div className="flex flex-col justify-center space-y-4">
                    <h1 className="text-4xl font-extrabold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                        Contact Us
                    </h1>
                    <p className="text-gray-600">
                        Have questions about books, pricing, or management?
                        We’d love to hear from you.
                    </p>

                    <div className="space-y-3 text-gray-700">
                        <p>
                            <span className="font-semibold">📍 Address:</span> Book Management HQ
                        </p>
                        <p>
                            <span className="font-semibold">📧 Email:</span> support@bookmanager.com
                        </p>
                        <p>
                            <span className="font-semibold">📞 Phone:</span> +91 98765 43210
                        </p>
                    </div>
                </div>

                {/* Right Section */}
                <form className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Your Name
                        </label>
                        <input
                            type="text"
                            placeholder="Enter your name"
                            className="w-full px-4 py-3 rounded-xl border border-gray-300
              focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Email Address
                        </label>
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="w-full px-4 py-3 rounded-xl border border-gray-300
              focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Message
                        </label>
                        <textarea
                            rows="4"
                            placeholder="Write your message..."
                            className="w-full px-4 py-3 rounded-xl border border-gray-300
              focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none transition"
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full py-3 rounded-full text-white font-bold text-lg
            bg-gradient-to-r from-blue-600 to-purple-600
            hover:from-blue-700 hover:to-purple-700
            transition-all duration-300 shadow-lg hover:shadow-xl
            active:scale-95"
                    >
                        Send Message
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Contact;
