export default function CardComponent(props) {
    return (
        <div
            className="max-w-xs bg-white/90 backdrop-blur-lg
            shadow-xl hover:shadow-2xl transition-all duration-300
            rounded-3xl overflow-hidden p-5 flex flex-col gap-4
            hover:-translate-y-1"
        >
            <div className="overflow-hidden rounded-2xl">
                <img
                    src={props.BookUrl}
                    alt={props.BookName}
                    className="w-full h-64 object-cover transition-transform duration-300 hover:scale-105"
                />
            </div>

            <h2 className="text-xl font-bold text-gray-900 text-center">
                {props.BookName}
            </h2>

            <div className="text-sm text-gray-600 space-y-1 text-center">
                <p>
                    <span className="font-medium text-gray-800">Author:</span>{" "}
                    {props.BookAuthorName}
                </p>
                <p>
                    <span className="font-medium text-gray-800">Category:</span>{" "}
                    {props.BookCategory}
                </p>
            </div>

            <textarea
                readOnly
                className="text-sm text-gray-600 bg-gray-100 rounded-xl p-3 resize-none focus:outline-none"
                value={`Description: ${props.BookDescription}`}
            />

            <p className="text-lg font-extrabold text-green-600 text-center">
                ₹ {props.BookPrice}
            </p>

            <div className="flex gap-3 justify-center mt-2">
                <button
                    className="px-5 py-2 rounded-full bg-blue-500 text-white
                    font-semibold transition-all duration-300
                    hover:bg-blue-600 hover:shadow-lg active:scale-95"
                >
                    Edit
                </button>

                <button
                    className="px-5 py-2 rounded-full bg-red-500 text-white
                    font-semibold transition-all duration-300
                    hover:bg-red-600 hover:shadow-lg active:scale-95"
                >
                    Remove
                </button>
            </div>
        </div>
    );
}