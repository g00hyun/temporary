import axios from "axios";
import { useState, useEffect } from "react";
import qs from 'qs';
import Receipe from "./Receipe";
import Ingredient from "./Ingredient";


const Food = () => {
  const [food, setFood] = useState([]);

  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  useEffect(() => {
    axios
      .get("https://www.themealdb.com/api/json/v1/1/search.php")
      .then((response) => {
        // 응답 데이터 처리
        setFood(response);
      })
      .catch((error) => {
        // 오류 처리
        console.error(error);
      });
  }, []);

  const handleSubmit = () => {
    const query = qs.stringify({ s: inputValue }); // 입력한 값 query string으로 변환

    axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?${query}`)
      .then((response) => {
        // 응답 데이터 처리
        setFood(response);
        console.log(response.data.meals[0])
      })
      .catch((error) => {
        // 오류 처리
        console.error(error);
      });
  };

//   console.log(food.data.meals[0]);

  return (
    <div>
      <input type="text" value={inputValue} onChange={handleInputChange} />
      <button onClick={handleSubmit}>Submit</button>
      {food && food.data && food.data.meals && food.data.meals.length > 0 && (
        <div>
          <h1>{food.data.meals[0].strMeal}</h1>
          <img src={food.data.meals[0].strMealThumb}></img>
          <Ingredient data={food.data.meals[0]}></Ingredient>
          <Receipe text={food.data.meals[0].strInstructions}></Receipe>
        </div>
      )}
    </div>
  );
};

export default Food;
