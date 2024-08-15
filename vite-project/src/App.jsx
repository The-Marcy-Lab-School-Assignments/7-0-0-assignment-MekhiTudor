import { useState } from "react";
import Buttons from "./comps/buttons";
import Greeting from "./comps/greeting";
import FontButtons from "./comps/fontSize";
import "./App.css";

function App() {
  const [phrase, setPhrase] = useState("Good Morning!");
  const [font, setFont] = useState(3.2);

  return (
    <>
      <FontButtons setFont={setFont} />
      <Greeting fontSize={font} morning={phrase} />
      <Buttons setPhrase={setPhrase} />
    </>
  );
}

export default App;
