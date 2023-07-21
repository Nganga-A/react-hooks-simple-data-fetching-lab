// create your App component here
import React, { useState, useEffect } from 'react';

const App = () => {
  // State to hold the dog image URL and loading status
  const [dogImage, setDogImage] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Fetch the data from the API
    fetch('https://dog.ceo/api/breeds/image/random')
      .then((response) => response.json())
      .then((data) => {
        // Set the dog image URL in state and indicate that loading is done
        setDogImage(data.message);
        setIsLoading(false);
      })
  }, []); // The empty dependency array ensures that this effect runs only once, when the component mounts

  return (
    <div>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <img src={dogImage} alt="A Random Dog" />
      )}
    </div>
  );
};

export default App;
