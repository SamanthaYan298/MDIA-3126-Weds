"use client"; // your computer is client
import Image from "next/image";
import { useState } from 'react';

export default function Home() {
  // Implementation
  // x Pick an API
  // - Build a button component that has a fetch action/clear action
  // - Build a component that display our data (should have an empty and fulfilled state)
  // - Build a function that will fetch some data - step 3
  // - Format and  handle the data
  // - (error handling)
  // - Style our app and create breakpoints
  // x Component for out button to sit in


  const [pictureContent, setPictureContent] = useState(null);
  const [loading, setLoading] = useState(false);

  // asking some other computer somewhere to send out the data but do not know how long it will take

  async function fetchPictures() {
    const API_URL =
      "https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&count=5" // API Demo key
    const response = await fetch(API_URL) // ask to wait here until we have actual data to get
    debuger;
    const testVar = "hello";
    debuger;
    setPictureContent("fetch data");
  }

  const Header = () => {
    return (
      <header>
        <h1>My Cool Midterm Submission</h1>
        <button 
          className="border-2 border-black p-2"
          onClick={fetchPictures}
          >Fetch </button>
      </header>
    )
  }
  
  const PictureDisplay = () => {
    if(loading === true) {
      return <section>Loading...</section>;
    }
    if(pictureContent) {
      return <section>I've retrived some content</section>;
    }

    return <section>No pictures have been fetched</section>;
}

  return (
    <div className="m-8">
      <Header />
      <PictureDisplay />
    </div>
  );
}
