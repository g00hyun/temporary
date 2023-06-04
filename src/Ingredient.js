const Ingredient = ({ data }) => {
  const ingreArr = [];
  const measureArr = [];

  Object.keys(data).forEach((key) => {
    if (key.includes("Ingredient") && data[key] !== "") {
      ingreArr.push(data[key]);
    }
  });

  Object.keys(data).forEach((key) => {
    if (key.includes("Measure") && data[key] !== " ") {
      measureArr.push(data[key]);
    }
  });

  console.log(ingreArr);
  console.log(measureArr);

  return (
    <div>
      <h2>
        Ingredients
      </h2>
      <ul>
        {ingreArr.map((ingredient, index) => (
          <li key={index}>
            <span>{ingredient}</span> - <span>{measureArr[index]}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Ingredient;
