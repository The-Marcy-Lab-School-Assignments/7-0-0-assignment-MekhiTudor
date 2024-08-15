const FontButtons = ({ setFont }) => {
  const handleFontPlus = () => {
    setFont((font) => font + 0.1);
  };

  const handleFontMinus = () => {
    setFont((font) => font - 0.1);
  };
  return (
    <>
      <button onClick={handleFontPlus}>+</button>
      <button onClick={handleFontMinus}>-</button>
    </>
  );
};

export default FontButtons;
