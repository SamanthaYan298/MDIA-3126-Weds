'use client'
import Image from "next/image";
import { useState } from "react";

export default function Page() {
// to-do list
// x create a product page
// x create a header
// x create a button the request data
// x request data
// 5 store the data in my state (react state)
// 6 output the data
    const [products, setProducts] = useState(null); // "" is also dangerous as it also has something inside
    const API_ENDPOINT = "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json"

    async function fetchProducts() {
        const response = await fetch(API_ENDPOINT)
        // wiaiting for the response
        // taking the response and assigning to another variable
        console.log(response)
        const data = await response.json();
        console.log(data);

        setProducts(data);
    }


    const ProductList = () => {
        if(products) {
                let productsList = [];

                products.forEach((product, index) => {
                    productsList.push(
                        <li key={index}>{product.name}</li>
                    )
                });
        }


        return (
            <div className="border-4 border-black p-4 mb-4">
                <ul>{ProductList}</ul>
            </div>
        )
    }

    return (
        <div className="border-4 border-black p-4 mb-4">No product right now!</div>
    )

    return (
        <div className="bg-yellow-300 p-4">
            <header className="border-4 border-black p-4 mb-4">
                <h1 className="text-4xl mb-6 text-yellow-500">Welcome to my product page!</h1>
                <button 
                    className="border-black border-2 p-2 bg-black text-yellow-300"
                    onClick={fetchProducts}
                >
                    Fetch products!
                </button>
            </header>
            <ProductList />
        </div>
    )
}