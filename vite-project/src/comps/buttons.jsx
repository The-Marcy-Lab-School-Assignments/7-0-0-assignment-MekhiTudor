const langObj = {
  English: "Good Morning!",
  Spanish: "¡Buen Día!",
  Chinese: "早安!",
  Latin: "Salve!",
  Greek: "Καλημέρα!",
};

const Buttons = ({ setPhrase }) => {
  const handleClick = (lang) => {
    setPhrase(langObj[lang]);
  };
  return (
    <>
      <button onClick={() => handleClick("English")}>English</button>
      <button onClick={() => handleClick("Spanish")}>Spanish</button>
      <button onClick={() => handleClick("Chinese")}>Chinese</button>
      <button onClick={() => handleClick("Latin")}>Latin</button>
      <button onClick={() => handleClick("Greek")}>Greek</button>
    </>
  );
};

export default Buttons;
