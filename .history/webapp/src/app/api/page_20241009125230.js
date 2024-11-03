import Image from "next/image";

export default function Page() {
// to-do list
// 1 create a product page
// 2 create a header
// 3 create a button the request data
// 4 store the data in my state (react state)
// 5 output the data


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