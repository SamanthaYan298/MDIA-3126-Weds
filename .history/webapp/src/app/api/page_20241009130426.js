import Image from "next/image";

export default function Page() {
// to-do list
// x create a product page
// x create a header
// x create a button the request data
// 4 request data
// 5 store the data in my state (react state)
// 6 output the data

    return (
        <div className="bg-yellow-300 p-4">
            <header className="border-4 border-black p-4 mb-4">
                <h1 className="text-4xl mb-6 text-yellow-500">Welcome to my product page!</h1>
                <button className="border-black border-2 p-2">
                    Fetch products!
                </button>
            </header>
        </div>
    )
}