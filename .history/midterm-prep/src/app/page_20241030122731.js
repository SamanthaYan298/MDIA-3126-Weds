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



  const Header = () => {
    return (
      <header>
        <h1>My Cool Midterm Submission</h1>
        <button className="border-2 border-black p-2">Fetch </button>
      </header>
    )
  }
  
  const pictureDisplay = () => {
    return <section>Here is where I will display my data</section>
  }

  return (
    <div className="m-8">
      <Header />
      <pictureDisplay />
    </div>
  );
}
