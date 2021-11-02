import { useState } from "react";

// interface Joke {
//   id: number;
//   type: string;
//   setup: string;
//   punchline: string;
// }
interface DogImage {
  message: string;
  status: string;
}

function App() {
  const [joke, setJoke] = useState<DogImage>();

  const handleGetJoke = async () => {
    const response = await fetch("https://dog.ceo/api/breeds/image/random");
    const jsonBody: DogImage = await response.json();
    setJoke(jsonBody);
  };

  // const handleGetJoke = () => {
  //   fetch("https://dog.ceo/api/breeds/image/random")
  //     .then((response) => response.json())
  //     .then((jsonBody: DogImage[]) => setJoke(jsonBody[0]));
  // };

  if (joke) {
    return (
      <div>
        <img src={joke.message} alt="hi" />
        <button onClick={handleGetJoke}>Please show me another dog</button>
      </div>
    );
  } else {
    return (
      <div>
        <h1>Joke app</h1>
        <p>
          Click the button to trigger a <code>fetch</code> that gets a random
          dog photo from an API!
        </p>

        <button onClick={handleGetJoke}>Get joke</button>
      </div>
    );
  }
}

export default App;
