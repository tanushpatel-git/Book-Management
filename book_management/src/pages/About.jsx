import React from "react";

const About = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100 px-4 py-16">
            <div
                className="max-w-5xl mx-auto bg-white/80 backdrop-blur-xl
        rounded-3xl shadow-2xl border border-white/40 p-10 space-y-12"
            >
                {/* Header */}
                <div className="text-center space-y-4">
                    <h1 className="text-5xl font-extrabold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                        About Book Management
                    </h1>
                    <p className="text-gray-600 text-lg max-w-3xl mx-auto">
                        Book Management is a simple, modern platform designed to help users
                        manage, organize, and explore books efficiently.
                    </p>
                </div>

                {/* Mission Section */}
                <div className="grid md:grid-cols-2 gap-8 items-center">
                    <div className="space-y-4">
                        <h2 className="text-3xl font-bold text-gray-800">Our Mission</h2>
                        <p className="text-gray-600 leading-relaxed">
                            Our mission is to provide an easy-to-use system where users can
                            add, manage, and explore books without complexity. We believe
                            managing books should be intuitive, fast, and visually pleasing.
                        </p>
                    </div>

                    <div className="bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl p-6 text-white shadow-lg">
                        <p className="text-lg font-semibold">
                            📚 Organize your books
                            <br />
                            🚀 Manage with ease
                            <br />
                            ✨ Enjoy a clean experience
                        </p>
                    </div>
                </div>

                {/* Features Section */}
                <div className="space-y-6">
                    <h2 className="text-3xl font-bold text-gray-800 text-center">
                        What You Can Do
                    </h2>

                    <div className="grid md:grid-cols-3 gap-6">
                        {[
                            {
                                title: "Add Books",
                                desc: "Easily add books with images, authors, categories, and prices.",
                            },
                            {
                                title: "Manage Collection",
                                desc: "Edit or remove books from your collection anytime.",
                            },
                            {
                                title: "User Friendly",
                                desc: "Clean UI with smooth interactions and modern design.",
                            },
                        ].map((item, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition"
                            >
                                <h3 className="text-xl font-bold text-gray-800 mb-2">
                                    {item.title}
                                </h3>
                                <p className="text-gray-600">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Closing Section */}
                <div className="text-center space-y-4">
                    <h2 className="text-3xl font-bold text-gray-800">
                        Built for Book Lovers 📖
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Whether you are managing a personal library or experimenting with
                        book collections, Book Management helps you stay organized and
                        focused.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default About;