export default function CardComponent(props) {
    

    return (
        <div className="max-w-xs bg-white shadow-lg rounded-2xl overflow-hidden p-4 flex flex-col items-center gap-3">
            <img
                src={props.BookUrl}
                alt={props.BookName}
                className="w-full h-full object-cover rounded-xl"
            />

            <h2 className="text-lg font-semibold text-gray-800 text-center">{props.BookName}</h2>
            <p className="text-sm text-gray-600">Author: {props.BookAuthorName}</p>
            <p className="text-sm text-gray-600">Category: {props.BookCategory}</p>
            <textarea className="text-sm text-gray-600" value={`Description: ${props.BookDescription}`}></textarea>
            <p className="text-base font-bold text-green-700">Price: {props.BookPrice}</p>
            <div className=" flex gap-2 items-center justify-center">
                <button className=" bg-blue-500 text-3xl p-2 rounded-2xl hover:bg-blue-600">Edit</button>
                <button className=" bg-red-500 text-3xl p-2 rounded-2xl hover:bg-red-600">Remove</button>
            </div>
        </div>
    );
}