const Greeting = ({ morning, fontSize }) => {
  return <h1 style={{ fontSize: `${fontSize}em` }}>{morning}</h1>;
};

export default Greeting;
