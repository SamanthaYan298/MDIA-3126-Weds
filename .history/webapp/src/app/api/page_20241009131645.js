import Image from "next/image";
import { useState } from "react/cjs/react.production.min";

export default function Page() {
// to-do list
// x create a product page
// x create a header
// x create a button the request data
// 4 request data
// 5 store the data in my state (react state)
// 6 output the data
    const [product, setProduct] = useState(null); // "" is also dangerous as it also has something inside
    const API_ENDPOINT = "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json"

    async function fetchProducts() {
        const response = await fetch(API_ENDPOINT)
    }


    const ProductList = () => {
        return (
            <div className="border-4 border-black p-4 mb-4">
                products will go here when we get data!
            </div>
        )
    }

    return (
        <div className="bg-yellow-300 p-4">
            <header className="border-4 border-black p-4 mb-4">
                <h1 className="text-4xl mb-6 text-yellow-500">Welcome to my product page!</h1>
                <button className="border-black border-2 p-2">
                    Fetch products!
                </button>
            </header>
            <ProductList />
        </div>
    )
}