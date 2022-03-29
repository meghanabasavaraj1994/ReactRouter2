import React from "react";
import { useHistory } from "react-router-dom";
const Home = () => {
  const history = useHistory();

  const handleAbout = () => history.push("/about"); 
  const handleGallery = () => history.push("/gallery?print=20"); 
  const handleBack = () => history.goBack(); 
  const handleForward = () => history.goForward(); 

  return (
    <div>
      <h1>Hello, I'm Home component </h1>
      <hr />
      <h2>useHistory</h2>
      <button onClick={handleAbout}>Go to "About"</button>
      <button onClick={handleBack}>Back</button>
      <button onClick={handleForward}>Forward</button>
      <button onClick={handleGallery}>
        Go to "Gallery" with params "?print=20"
      </button>
      <hr />
    </div>
  );
};

export default Home;